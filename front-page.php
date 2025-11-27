<?php
/**
 * Template Name: Landing Page
 * Description: Front page template for Dr. Pires psychology landing page
 * 
 * @package DrPires
 */

get_header();
?>

<main id="main" class="site-main">

    <!-- 1. SEÇÃO HERÓI -->
    <section class="hero">
        <div class="container hero-content">
            <div class="hero-text">
                <h1><?php echo esc_html(get_theme_mod('drpires_hero_title', 'Supere a Paralisia da Ansiedade Crônica')); ?>
                </h1>
                <p><?php echo esc_html(get_theme_mod('drpires_hero_subtitle', 'Recupere o controle da sua vida e encontre o equilíbrio emocional com um acompanhamento especializado e acolhedor.')); ?>
                </p>
                <?php
                $whatsapp = get_theme_mod('drpires_whatsapp', '5511999999999');
                $whatsapp_url = 'https://wa.me/' . $whatsapp . '?text=' . urlencode('Olá, gostaria de agendar uma consulta que vi no site.');
                ?>
                <a href="<?php echo esc_url($whatsapp_url); ?>" class="btn btn-primary" target="_blank">
                    Agende Sua Consulta (WhatsApp)
                </a>
            </div>
            <div class="hero-image">
                <?php
                $hero_image = get_theme_mod('drpires_hero_image');
                if ($hero_image) {
                    echo '<img src="' . esc_url($hero_image) . '" alt="' . esc_attr(get_bloginfo('name')) . '">';
                } else {
                    echo '<img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Dr. Pires - Psicólogo">';
                }
                ?>
            </div>
        </div>
    </section>

    <!-- 2. SEÇÃO AUTORIDADE (MINI BLOG) -->
    <section class="section authority">
        <div class="container">
            <div class="section-header">
                <h2>Conteúdo para Sua Saúde Mental</h2>
                <p>Artigos e reflexões para ajudar na sua jornada.</p>
            </div>
            <div class="blog-grid">
                <?php
                // Query for custom post type 'artigos'
                $artigos_query = new WP_Query(array(
                    'post_type' => 'artigos',
                    'posts_per_page' => 3,
                    'orderby' => 'date',
                    'order' => 'DESC',
                ));

                if ($artigos_query->have_posts()):
                    while ($artigos_query->have_posts()):
                        $artigos_query->the_post();
                        ?>
                        <article class="blog-card">
                            <div class="blog-content">
                                <h3><?php the_title(); ?></h3>
                                <p><?php echo wp_trim_words(get_the_excerpt(), 20); ?></p>
                                <a href="<?php the_permalink(); ?>" class="read-more">Ler artigo completo &rarr;</a>
                            </div>
                        </article>
                        <?php
                    endwhile;
                    wp_reset_postdata();
                else:
                    // Fallback content if no posts exist
                    ?>
                    <article class="blog-card">
                        <div class="blog-content">
                            <h3>Como identificar o Burnout?</h3>
                            <p>Sinais físicos e emocionais que indicam que você precisa desacelerar agora mesmo.</p>
                            <a href="#" class="read-more">Ler artigo completo &rarr;</a>
                        </div>
                    </article>
                    <article class="blog-card">
                        <div class="blog-content">
                            <h3>A importância do sono na ansiedade</h3>
                            <p>Entenda a relação direta entre a qualidade do seu sono e seus níveis de estresse.</p>
                            <a href="#" class="read-more">Ler artigo completo &rarr;</a>
                        </div>
                    </article>
                    <article class="blog-card">
                        <div class="blog-content">
                            <h3>Luto: Um processo necessário</h3>
                            <p>Como lidar com a perda e transformar a dor em saudade saudável.</p>
                            <a href="#" class="read-more">Ler artigo completo &rarr;</a>
                        </div>
                    </article>
                <?php endif; ?>
            </div>
        </div>
    </section>

    <!-- 3. SEÇÃO MÉTODOS E DIFERENCIAIS -->
    <section class="section methods">
        <div class="container methods-content">
            <div class="methods-text">
                <h2>Minha Abordagem</h2>
                <p>Utilizo a Terapia Cognitivo-Comportamental (TCC) aliada a técnicas de Mindfulness para proporcionar
                    resultados práticos e duradouros. O foco é entender seus padrões de pensamento e criar estratégias
                    reais para o dia a dia.</p>

                <div class="highlight-box">
                    Atendimento Particular e Personalizado (Não atendo convênios)
                </div>
            </div>
            <div class="methods-visual">
                <?php
                $methods_image = get_theme_mod('drpires_methods_image');
                if ($methods_image) {
                    echo '<img src="' . esc_url($methods_image) . '" alt="Ambiente de consulta acolhedor" style="border-radius: 12px; opacity: 0.9;">';
                } else {
                    echo '<img src="https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Ambiente de consulta acolhedor" style="border-radius: 12px; opacity: 0.9;">';
                }
                ?>
            </div>
        </div>
    </section>

    <!-- 4. SEÇÃO PROVA SOCIAL -->
    <section class="section social-proof">
        <div class="container">
            <div class="section-header">
                <h2>O que dizem meus pacientes</h2>
            </div>
            <div class="testimonials-grid">
                <div class="testimonial-card">
                    <p class="testimonial-text">"O Dr. Pires me ajudou a enxergar a vida de outra forma. A ansiedade não
                        me paralisa mais."</p>
                    <p class="client-name">- Maria S., Executiva</p>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"Profissional excelente, muito atencioso e com uma abordagem que
                        realmente funciona."</p>
                    <p class="client-name">- João P., Engenheiro</p>
                </div>
                <div class="testimonial-card">
                    <p class="testimonial-text">"Me senti acolhida desde a primeira sessão. Recomendo para todos que
                        buscam autoconhecimento."</p>
                    <p class="client-name">- Ana C., Professora</p>
                </div>
            </div>
        </div>
    </section>

</main>

<?php
get_footer();
