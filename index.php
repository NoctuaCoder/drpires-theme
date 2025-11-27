<?php
/**
 * The main template file
 * 
 * @package DrPires
 */

get_header();
?>

<main id="main" class="site-main">
    <div class="container">
        <section class="section">
            <?php
            if (have_posts()):
                while (have_posts()):
                    the_post();
                    ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
                        <header class="entry-header">
                            <h2 class="entry-title">
                                <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                            </h2>
                            <div class="entry-meta">
                                <span class="posted-on"><?php echo get_the_date(); ?></span>
                            </div>
                        </header>

                        <?php if (has_post_thumbnail()): ?>
                            <div class="post-thumbnail">
                                <a href="<?php the_permalink(); ?>">
                                    <?php the_post_thumbnail('drpires-blog'); ?>
                                </a>
                            </div>
                        <?php endif; ?>

                        <div class="entry-content">
                            <?php the_excerpt(); ?>
                        </div>

                        <footer class="entry-footer">
                            <a href="<?php the_permalink(); ?>" class="read-more">
                                Ler mais &rarr;
                            </a>
                        </footer>
                    </article>
                    <?php
                endwhile;

                the_posts_navigation();
            else:
                ?>
                <p><?php esc_html_e('Nenhum conteúdo encontrado.', 'drpires-theme'); ?></p>
                <?php
            endif;
            ?>
        </section>
    </div>
</main>

<?php
get_footer();
