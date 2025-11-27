<?php
/**
 * The template for displaying all single posts and artigos
 * 
 * @package DrPires
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="container">
        <section class="section">
            <?php
            while (have_posts()):
                the_post();
                ?>
                <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                    <header class="entry-header">
                        <h1 class="entry-title"><?php the_title(); ?></h1>
                        <div class="entry-meta">
                            <span class="posted-on">Publicado em <?php echo get_the_date(); ?></span>
                            <?php
                            $categories = get_the_terms(get_the_ID(), 'categoria_artigo');
                            if ($categories && !is_wp_error($categories)):
                                echo ' | <span class="categories">';
                                $cat_links = array();
                                foreach ($categories as $category) {
                                    $cat_links[] = '<a href="' . esc_url(get_term_link($category)) . '">' . esc_html($category->name) . '</a>';
                                }
                                echo implode(', ', $cat_links);
                                echo '</span>';
                            endif;
                            ?>
                        </div>
                    </header>

                    <?php if (has_post_thumbnail()): ?>
                        <div class="post-thumbnail">
                            <?php the_post_thumbnail('drpires-hero'); ?>
                        </div>
                    <?php endif; ?>

                    <div class="entry-content">
                        <?php
                        the_content();

                        wp_link_pages(array(
                            'before' => '<div class="page-links">' . esc_html__('Páginas:', 'drpires-theme'),
                            'after' => '</div>',
                        ));
                        ?>
                    </div>

                    <footer class="entry-footer">
                        <?php
                        $whatsapp = get_theme_mod('drpires_whatsapp', '5511999999999');
                        $whatsapp_url = 'https://wa.me/' . $whatsapp . '?text=' . urlencode('Olá, gostaria de agendar uma consulta.');
                        ?>
                        <div
                            style="text-align: center; margin-top: var(--spacing-lg); padding: var(--spacing-md); background: var(--background-alt); border-radius: var(--border-radius);">
                            <h3>Gostou do artigo?</h3>
                            <p>Agende uma consulta e comece sua jornada de autoconhecimento.</p>
                            <a href="<?php echo esc_url($whatsapp_url); ?>" class="btn btn-primary" target="_blank">
                                Agendar Consulta
                            </a>
                        </div>
                    </footer>
                </article>

                <?php
                // Navigation to previous/next post
                the_post_navigation(array(
                    'prev_text' => '<span class="nav-subtitle">' . esc_html__('Anterior:', 'drpires-theme') . '</span> <span class="nav-title">%title</span>',
                    'next_text' => '<span class="nav-subtitle">' . esc_html__('Próximo:', 'drpires-theme') . '</span> <span class="nav-title">%title</span>',
                ));
                ?>

                <?php
            endwhile;
            ?>
        </section>
    </div>
</main>

<?php
get_footer();
