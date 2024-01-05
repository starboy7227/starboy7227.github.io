module.exports = {
    theme: 'vuepress-theme-default-prefers-color-scheme',

    themeConfig: {
        logo: '/images/logo.png',
        overrideTheme: 'dark',
        overrideTheme: { light: [6, 18], dark: [18, 6] },
        nav:[
            {text:'Home', link:'/'},
            {text:'Github', link:'https://github.com/starboy7227'},
            {
                text: 'SocialMedia',
                ariaLabel: 'SocialMedia',
                items: [
                { text: 'Facebook', link: 'https://reurl.cc/WRryML' },
                { text: 'IG', link: 'https://www.instagram.com/ethan_hoooo/' },
                ]
            }
        ],
        
        sidebar: [
            {
                title: 'Step behind',      
                path: '/Step behind/What is \'step behind\'/',     
                collapsable: false, 
                children: [
                    '/Step behind/What is \'step behind\'/'
                ]
            },
            
            {
              title: 'About me',      
              path: '/About_me/Introduction/',     
              collapsable: false, 
              children: [
                '/About_me/Introduction/'
              ]
            },
        ],

    },

    plugins: [
        '@vuepress/back-to-top'
    ],


    title: 'Ethan\'s blog',
    dest: 'docs'
}