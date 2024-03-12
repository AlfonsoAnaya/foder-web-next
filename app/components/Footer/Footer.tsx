function Footer() {

    return (
        <footer className="w-100% h-[200px] mt-10 flex flex-col md:flex-row gap-2 md:gap-10 justify-center items-start md:items-center p-6 bg-primary text-white">
            <div className="company-info">© FODER Inc.</div>
            <div className="social-media">
                <a href="https://meal-planner-site.netlify.app/">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" className="fill-[#fffcfb] hover:fill-dark" >
                            <path className="fill-[#fffcfb] hover:fill-dark w-[32px] h-[32px]" d="M16 8c2.173 0 2.445.01 3.298.048.852.039 1.433.174 1.942.372.526.204.973.478 1.417.923a3.9 3.9 0 0 1 .923 1.417c.198.509.333 1.09.372 1.942.039.853.048 1.125.048 3.298s-.01 2.445-.048 3.298c-.039.852-.174 1.433-.372 1.942a3.923 3.923 0 0 1-.923 1.417 3.9 3.9 0 0 1-1.417.923c-.509.198-1.09.333-1.942.372-.853.039-1.125.048-3.298.048s-2.445-.01-3.298-.048c-.852-.039-1.433-.174-1.942-.372a3.923 3.923 0 0 1-1.417-.923 3.922 3.922 0 0 1-.923-1.417c-.198-.509-.333-1.09-.372-1.942C8.01 18.445 8 18.173 8 16s.01-2.445.048-3.298c.039-.852.174-1.433.372-1.942.204-.526.478-.973.923-1.417a3.9 3.9 0 0 1 1.417-.923c.509-.198 1.09-.333 1.942-.372C13.555 8.01 13.827 8 16 8Zm0 2c-1.954 0-2.186.007-2.957.043-.714.032-1.101.151-1.36.252a2.268 2.268 0 0 0-.84.547c-.257.256-.416.5-.548.842-.1.258-.22.645-.252 1.359C10.007 13.814 10 14.046 10 16s.007 2.186.043 2.957c.032.714.151 1.101.252 1.36.132.341.291.585.547.84.256.257.5.416.842.548.258.1.645.22 1.359.252.771.036 1.003.043 2.957.043s2.186-.007 2.957-.043c.714-.032 1.101-.151 1.36-.252.341-.132.585-.291.84-.547.257-.256.416-.5.548-.842.1-.258.22-.645.252-1.359.036-.771.043-1.003.043-2.957s-.007-2.186-.043-2.957c-.032-.714-.151-1.101-.252-1.36a2.268 2.268 0 0 0-.547-.84 2.267 2.267 0 0 0-.842-.548c-.258-.1-.645-.22-1.359-.252C18.186 10.007 17.954 10 16 10Zm0 1.768a4.233 4.233 0 1 1 0 8.466 4.233 4.233 0 0 1 0-8.466Zm0 6.6a2.368 2.368 0 1 0 0-4.736 2.368 2.368 0 0 0 0 4.736Zm5.3-6.518a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z" />
                        </svg>
                </a>
            </div>
            <div className="footer-links flex flex-col md:flex-row gap-2 md:gap-6">
                <a href="https://meal-planner-site.netlify.app/" className="contact hover:text-dark underline">Contacto</a>
                <a href="https://meal-planner-site.netlify.app/" className="terms-of-use hover:text-dark underline">Términos y Condiciones</a>
                <a href="https://meal-planner-site.netlify.app/" className="privacy-policy hover:text-dark underline">Política de Privacidad</a>
            </div>

        </footer>
    )
}

export default Footer;