</div><!-- #page -->

<footer>
    <div class="container footer-content">
        <h2>Pronto para dar o próximo passo?</h2>
        <?php
        $whatsapp = get_theme_mod('drpires_whatsapp', '5511999999999');
        $whatsapp_url = 'https://wa.me/' . $whatsapp . '?text=' . urlencode('Olá, gostaria de agendar uma consulta que vi no site.');
        ?>
        <a href="<?php echo esc_url($whatsapp_url); ?>" class="btn btn-primary"
            style="background-color: var(--accent-color); color: var(--primary-color);" target="_blank">
            Agendar Consulta (WhatsApp)
        </a>

        <div class="footer-links">
            <?php
            if (has_nav_menu('footer')) {
                wp_nav_menu(array(
                    'theme_location' => 'footer',
                    'menu_class' => 'footer-menu',
                    'container' => false,
                    'depth' => 1,
                ));
            } else {
                ?>
                <a href="#">Instagram</a>
                <a
                    href="mailto:<?php echo esc_attr(get_theme_mod('drpires_email', 'contato@drpires.com.br')); ?>">E-mail</a>
                <a href="#">LinkedIn</a>
                <?php
            }
            ?>
        </div>

        <div class="legal">
            <p><?php bloginfo('name'); ?> - Psicólogo Clínico |
                <?php echo esc_html(get_theme_mod('drpires_crp', 'CRP 06/12345')); ?></p>
            <p><?php echo esc_html(get_theme_mod('drpires_address', 'Av. Paulista, 1000 - São Paulo, SP')); ?></p>
            <p>Emitimos nota fiscal para reembolso.</p>
            <p>&copy; <?php echo date('Y'); ?> Todos os direitos reservados.</p>
        </div>

        <?php if (is_active_sidebar('footer-1')): ?>
            <div class="footer-widgets">
                <?php dynamic_sidebar('footer-1'); ?>
            </div>
        <?php endif; ?>
    </div>
</footer>

<?php wp_footer(); ?>
</body>

</html>