<?php
/**
 * GitHub Theme Updater
 * Adiciona suporte a atualizações automáticas do GitHub
 * 
 * @package DrPires
 */

if (!defined('ABSPATH')) {
    exit;
}

class DrPires_GitHub_Updater
{

    private $github_username = 'NoctuaCoder';
    private $github_repo = 'drpires-theme';
    private $theme_slug = 'drpires-theme';

    public function __construct()
    {
        add_filter('pre_set_site_transient_update_themes', array($this, 'check_for_update'));
    }

    public function check_for_update($transient)
    {
        if (empty($transient->checked)) {
            return $transient;
        }

        // Buscar informações da última release no GitHub
        $remote_version = $this->get_remote_version();
        $current_version = wp_get_theme($this->theme_slug)->get('Version');

        if ($remote_version && version_compare($current_version, $remote_version, '<')) {
            $transient->response[$this->theme_slug] = array(
                'theme' => $this->theme_slug,
                'new_version' => $remote_version,
                'url' => "https://github.com/{$this->github_username}/{$this->github_repo}",
                'package' => "https://github.com/{$this->github_username}/{$this->github_repo}/archive/refs/heads/main.zip",
            );
        }

        return $transient;
    }

    private function get_remote_version()
    {
        $api_url = "https://api.github.com/repos/{$this->github_username}/{$this->github_repo}/releases/latest";

        $response = wp_remote_get($api_url, array(
            'timeout' => 10,
            'headers' => array(
                'Accept' => 'application/vnd.github.v3+json',
            ),
        ));

        if (is_wp_error($response)) {
            return false;
        }

        $body = json_decode(wp_remote_retrieve_body($response), true);

        if (isset($body['tag_name'])) {
            return str_replace('v', '', $body['tag_name']);
        }

        return false;
    }
}

// Inicializar o updater
new DrPires_GitHub_Updater();
