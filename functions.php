<?php
/**
 * Dr. Pires Theme Functions
 * 
 * @package DrPires
 * @since 1.0.0
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly
}

/**
 * Theme Setup
 */
function drpires_theme_setup()
{
    // Add default posts and comments RSS feed links to head
    add_theme_support('automatic-feed-links');

    // Let WordPress manage the document title
    add_theme_support('title-tag');

    // Enable support for Post Thumbnails
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(800, 600, true);

    // Add custom image sizes
    add_image_size('drpires-hero', 1200, 800, true);
    add_image_size('drpires-blog', 600, 400, true);

    // Register navigation menus
    register_nav_menus(array(
        'primary' => __('Primary Menu', 'drpires-theme'),
        'footer' => __('Footer Menu', 'drpires-theme'),
    ));

    // Switch default core markup to output valid HTML5
    add_theme_support('html5', array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ));

    // Add theme support for selective refresh for widgets
    add_theme_support('customize-selective-refresh-widgets');

    // Add support for custom logo
    add_theme_support('custom-logo', array(
        'height' => 100,
        'width' => 400,
        'flex-height' => true,
        'flex-width' => true,
    ));

    // Add support for editor styles
    add_theme_support('editor-styles');
    add_editor_style('style.css');

    // Add support for responsive embeds
    add_theme_support('responsive-embeds');
}
add_action('after_setup_theme', 'drpires_theme_setup');

/**
 * Enqueue scripts and styles
 */
function drpires_scripts()
{
    // Google Fonts
    wp_enqueue_style(
        'drpires-google-fonts',
        'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style('drpires-style', get_stylesheet_uri(), array(), '1.0.0');

    // Main JavaScript (if needed)
    // wp_enqueue_script('drpires-script', get_template_directory_uri() . '/js/main.js', array(), '1.0.0', true);

    // Comment reply script
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'drpires_scripts');

/**
 * Register widget areas
 */
function drpires_widgets_init()
{
    // Footer widget area
    register_sidebar(array(
        'name' => __('Footer Widget Area', 'drpires-theme'),
        'id' => 'footer-1',
        'description' => __('Add widgets here to appear in your footer.', 'drpires-theme'),
        'before_widget' => '<div id="%1$s" class="widget %2$s">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="widget-title">',
        'after_title' => '</h3>',
    ));
}
add_action('widgets_init', 'drpires_widgets_init');

/**
 * Custom excerpt length
 */
function drpires_excerpt_length($length)
{
    return 30;
}
add_filter('excerpt_length', 'drpires_excerpt_length');

/**
 * Custom excerpt more
 */
function drpires_excerpt_more($more)
{
    return '...';
}
add_filter('excerpt_more', 'drpires_excerpt_more');

/**
 * Custom Post Type: Artigos (Blog Posts)
 */
function drpires_register_artigos_post_type()
{
    $labels = array(
        'name' => _x('Artigos', 'post type general name', 'drpires-theme'),
        'singular_name' => _x('Artigo', 'post type singular name', 'drpires-theme'),
        'menu_name' => _x('Artigos', 'admin menu', 'drpires-theme'),
        'name_admin_bar' => _x('Artigo', 'add new on admin bar', 'drpires-theme'),
        'add_new' => _x('Adicionar Novo', 'artigo', 'drpires-theme'),
        'add_new_item' => __('Adicionar Novo Artigo', 'drpires-theme'),
        'new_item' => __('Novo Artigo', 'drpires-theme'),
        'edit_item' => __('Editar Artigo', 'drpires-theme'),
        'view_item' => __('Ver Artigo', 'drpires-theme'),
        'all_items' => __('Todos os Artigos', 'drpires-theme'),
        'search_items' => __('Buscar Artigos', 'drpires-theme'),
        'not_found' => __('Nenhum artigo encontrado.', 'drpires-theme'),
        'not_found_in_trash' => __('Nenhum artigo encontrado na lixeira.', 'drpires-theme'),
    );

    $args = array(
        'labels' => $labels,
        'description' => __('Artigos de blog sobre saúde mental', 'drpires-theme'),
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'show_in_menu' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'artigos'),
        'capability_type' => 'post',
        'has_archive' => true,
        'hierarchical' => false,
        'menu_position' => 5,
        'menu_icon' => 'dashicons-edit-large',
        'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
        'show_in_rest' => true, // Enable Gutenberg editor
    );

    register_post_type('artigos', $args);
}
add_action('init', 'drpires_register_artigos_post_type');

/**
 * Custom Taxonomy: Categorias de Artigos
 */
function drpires_register_artigos_taxonomy()
{
    $labels = array(
        'name' => _x('Categorias', 'taxonomy general name', 'drpires-theme'),
        'singular_name' => _x('Categoria', 'taxonomy singular name', 'drpires-theme'),
        'search_items' => __('Buscar Categorias', 'drpires-theme'),
        'all_items' => __('Todas as Categorias', 'drpires-theme'),
        'edit_item' => __('Editar Categoria', 'drpires-theme'),
        'update_item' => __('Atualizar Categoria', 'drpires-theme'),
        'add_new_item' => __('Adicionar Nova Categoria', 'drpires-theme'),
        'new_item_name' => __('Nome da Nova Categoria', 'drpires-theme'),
        'menu_name' => __('Categorias', 'drpires-theme'),
    );

    $args = array(
        'hierarchical' => true,
        'labels' => $labels,
        'show_ui' => true,
        'show_admin_column' => true,
        'query_var' => true,
        'rewrite' => array('slug' => 'categoria-artigo'),
        'show_in_rest' => true,
    );

    register_taxonomy('categoria_artigo', array('artigos'), $args);
}
add_action('init', 'drpires_register_artigos_taxonomy');

/**
 * Customizer additions
 */
function drpires_customize_register($wp_customize)
{
    // WhatsApp Number Setting
    $wp_customize->add_section('drpires_contact', array(
        'title' => __('Informações de Contato', 'drpires-theme'),
        'priority' => 30,
    ));

    $wp_customize->add_setting('drpires_whatsapp', array(
        'default' => '5511999999999',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('drpires_whatsapp', array(
        'label' => __('Número do WhatsApp', 'drpires-theme'),
        'section' => 'drpires_contact',
        'type' => 'text',
        'description' => __('Formato: 5511999999999 (código do país + DDD + número)', 'drpires-theme'),
    ));

    // Email Setting
    $wp_customize->add_setting('drpires_email', array(
        'default' => 'contato@drpires.com.br',
        'sanitize_callback' => 'sanitize_email',
    ));

    $wp_customize->add_control('drpires_email', array(
        'label' => __('E-mail de Contato', 'drpires-theme'),
        'section' => 'drpires_contact',
        'type' => 'email',
    ));

    // CRP Number
    $wp_customize->add_setting('drpires_crp', array(
        'default' => 'CRP 06/12345',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('drpires_crp', array(
        'label' => __('Número do CRP', 'drpires-theme'),
        'section' => 'drpires_contact',
        'type' => 'text',
    ));

    // Address
    $wp_customize->add_setting('drpires_address', array(
        'default' => 'Av. Paulista, 1000 - São Paulo, SP',
        'sanitize_callback' => 'sanitize_text_field',
    ));

    $wp_customize->add_control('drpires_address', array(
        'label' => __('Endereço', 'drpires-theme'),
        'section' => 'drpires_contact',
        'type' => 'text',
    ));
}
add_action('customize_register', 'drpires_customize_register');

/**
 * GitHub Auto-Updater
 * Inclui o sistema de atualização automática do GitHub
 */
require_once get_template_directory() . '/updater.php';
