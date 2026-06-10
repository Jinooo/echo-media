// ============================================
// Echo Media - Translation Dictionary
// ============================================

export type Lang = 'en' | 'zh';

export const TRANSLATIONS: Record<Lang, Record<string, string>> = {
  en: {
    // --- Navigation ---
    'nav.works': 'Works',
    'nav.team': 'Team',
    'nav.contact': 'Contact',
    'nav.main': 'Main navigation',
    'nav.footer': 'Footer navigation',
    'nav.toggle': 'Toggle navigation menu',
    'nav.homeAria': 'Echo Media — Home',
    'nav.navigate': 'Navigate',
    'nav.connect': 'Connect',

    // --- Hero ---
    'hero.sectionAria': 'Hero',
    'hero.tagline': 'Tell The World Your Story',
    'hero.subtitle': 'A creative production studio where film, commercial, music video, documentary, and virtual production converge — bringing stories to life with cinematic precision.',
    'hero.viewWorks': 'View Works',
    'hero.contactUs': 'Contact Us',

    // --- About ---
    'about.label': 'About',
    'about.subtitle': '关于回声浩淼',
    'about.heading': 'A Creative Studio Built for the Future of Storytelling',
    'about.description': 'Founded in <strong>2020</strong>, Echo Media has quickly established itself as a premier creative production studio. We specialize in crafting visual stories that captivate, inspire, and leave a lasting impression — from cinematic commercials to intimate documentaries and cutting-edge virtual productions.',
    'about.schoolsLabel': 'Our team comes from',
    'about.statFounded': 'Founded',
    'about.statProjects': 'Projects',
    'about.statClients': 'Clients',
    'about.statAwards': 'Awards',

    // --- Services ---
    'services.label': 'What We Do',
    'services.heading': 'Services',

    // --- Selected Works ---
    'selectedWorks.label': 'Selected Works',
    'selectedWorks.heading': 'Featured Projects',
    'selectedWorks.filterAria': 'Filter works by category',
    'selectedWorks.all': 'All',
    'selectedWorks.viewProject': 'View Project',
    'selectedWorks.viewAll': 'View All Works',

    // --- Clients ---
    'clients.label': 'Trusted By',
    'clients.heading': 'Clients',

    // --- Contact CTA ---
    'contactCta.label': 'Contact',
    'contactCta.heading': "Let's Create Something Together",
    'contactCta.subtitle': "Have a project in mind? We'd love to hear about it. Get in touch and let's make something amazing.",
    'contactCta.connectHeading': 'Connect With Us',
    'contactCta.nameLabel': 'Name',
    'contactCta.namePlaceholder': 'Your name',
    'contactCta.nameRequired': 'Name is required',
    'contactCta.companyLabel': 'Company',
    'contactCta.companyPlaceholder': 'Your company',
    'contactCta.emailLabel': 'Email',
    'contactCta.emailPlaceholder': 'you@company.com',
    'contactCta.emailRequired': 'Email is required',
    'contactCta.emailInvalid': 'Please enter a valid email',
    'contactCta.messageLabel': 'Message',
    'contactCta.messagePlaceholder': 'Tell us about your project...',
    'contactCta.messageRequired': 'Message is required',
    'contactCta.messageMinLength': 'Message must be at least 10 characters',
    'contactCta.submit': 'Send Message',
    'contactCta.success': "Thank you! We'll get back to you shortly.",

    // --- Works Page ---
    'works.title': 'Our Works',
    'works.subtitle': 'Explore our portfolio of film, commercial, music video, documentary, and virtual production projects.',
    'works.filterAria': 'Filter works by category',
    'works.searchLabel': 'Search works',
    'works.searchPlaceholder': 'Search projects...',
    'works.empty': 'No projects found matching your criteria.',
    'works.prev': 'Prev',
    'works.next': 'Next',
    'works.prevAria': 'Previous page',
    'works.nextAria': 'Next page',
    'works.paginationAria': 'Pagination',

    // --- Work Detail ---
    'workDetail.notFound': 'Project Not Found',
    'workDetail.notFoundText': "The project you're looking for doesn't exist or has been removed.",
    'workDetail.backToWorks': 'Back to Works',
    'workDetail.client': 'Client',
    'workDetail.year': 'Year',
    'workDetail.role': 'Role',
    'workDetail.aboutProject': 'About This Project',
    'workDetail.tools': 'Tools & Tech',
    'workDetail.gallery': 'Gallery',
    'workDetail.watch': 'Watch',
    'workDetail.playVideo': 'Play Video',
    'workDetail.credits': 'Credits',
    'workDetail.nextProject': 'Next Project',

    // --- Team ---
    'team.title': 'Our Team',
    'team.subtitle': 'A diverse collective of filmmakers, artists, and technologists united by a passion for visual storytelling.',
    'team.founder': 'Founder',
    'team.coreTeam': 'Core Team',
    'team.collaborators': 'Collaborators',
    'team.viewProfile': 'View profile of {name}',
    'team.experience': 'Experience',
    'team.closeDrawer': 'Close profile drawer',

    // --- Contact Page ---
    'contact.title': "Let's Create Together",
    'contact.subtitle': "Have a project in mind? We'd love to hear about it. Reach out and let's start a conversation.",
    'contact.infoTitle': 'Get In Touch',
    'contact.infoText': 'Whether you have a clear vision or just an idea, we\'re here to help bring it to life. Reach out through any of the channels below or use the contact form.',
    'contact.nameLabel': 'Name',
    'contact.namePlaceholder': 'Your full name',
    'contact.nameRequired': 'Name is required',
    'contact.companyLabel': 'Company',
    'contact.companyPlaceholder': 'Company or organization',
    'contact.emailLabel': 'Email',
    'contact.emailPlaceholder': 'you@company.com',
    'contact.emailRequired': 'Email is required',
    'contact.emailInvalid': 'Please enter a valid email address',
    'contact.messageLabel': 'Message',
    'contact.messagePlaceholder': 'Tell us about your project, timeline, and budget...',
    'contact.messageRequired': 'Message is required',
    'contact.messageMinLength': 'Please provide at least 10 characters',
    'contact.submit': 'Send Message',
    'contact.successTitle': 'Thank You!',
    'contact.successText': 'Your message has been sent. We\'ll get back to you within 24 hours.',

    // --- Footer ---
    'footer.tagline': 'Tell The World Your Story',
    'footer.copyright': '© {year} Echo Media. All rights reserved.',

    // --- Common ---
    'common.backToTop': 'Back to top',
    'common.skipToMain': 'Skip to main content',
    'common.loading': 'Loading...',
  },

  zh: {
    // --- Navigation ---
    'nav.works': '作品',
    'nav.team': '团队',
    'nav.contact': '联系我们',
    'nav.main': '主导航',
    'nav.footer': '底部导航',
    'nav.toggle': '切换导航菜单',
    'nav.homeAria': 'Echo Media — 首页',
    'nav.navigate': '导航',
    'nav.connect': '关注我们',

    // --- Hero ---
    'hero.sectionAria': '首屏',
    'hero.tagline': '让世界听见你的故事',
    'hero.subtitle': '一家创意制作工作室，融合电影、广告、音乐视频、纪录片与虚拟制作——以电影级的精度将故事呈现于银幕之上。',
    'hero.viewWorks': '浏览作品',
    'hero.contactUs': '联系我们',

    // --- About ---
    'about.label': '关于我们',
    'about.subtitle': '关于回声浩淼',
    'about.heading': '为未来叙事而生的创意工作室',
    'about.description': 'Echo Media 成立于 <strong>2020</strong> 年，已迅速成长为一家领先的创意制作工作室。我们专注于打造令人着迷、激发灵感、久久难忘的视觉故事——从具有电影感的广告片到私密的纪录片，再到前沿的虚拟制作。',
    'about.schoolsLabel': '核心团队来自',
    'about.statFounded': '成立时间',
    'about.statProjects': '项目',
    'about.statClients': '客户',
    'about.statAwards': '奖项',

    // --- Services ---
    'services.label': '我们的服务',
    'services.heading': '服务项目',

    // --- Selected Works ---
    'selectedWorks.label': '精选作品',
    'selectedWorks.heading': '代表项目',
    'selectedWorks.filterAria': '按类别筛选作品',
    'selectedWorks.all': '全部',
    'selectedWorks.viewProject': '查看项目',
    'selectedWorks.viewAll': '查看全部作品',

    // --- Clients ---
    'clients.label': '合作伙伴',
    'clients.heading': '客户',

    // --- Contact CTA ---
    'contactCta.label': '联系',
    'contactCta.heading': '一起创造不凡',
    'contactCta.subtitle': '有项目想法？我们很乐意倾听。与我们联系，一起创造令人惊叹的作品。',
    'contactCta.connectHeading': '关注我们',
    'contactCta.nameLabel': '姓名',
    'contactCta.namePlaceholder': '您的姓名',
    'contactCta.nameRequired': '请输入姓名',
    'contactCta.companyLabel': '公司',
    'contactCta.companyPlaceholder': '您的公司',
    'contactCta.emailLabel': '邮箱',
    'contactCta.emailPlaceholder': 'you@company.com',
    'contactCta.emailRequired': '请输入邮箱',
    'contactCta.emailInvalid': '请输入有效的邮箱地址',
    'contactCta.messageLabel': '留言',
    'contactCta.messagePlaceholder': '告诉我们您的项目需求...',
    'contactCta.messageRequired': '请输入留言',
    'contactCta.messageMinLength': '留言至少需要10个字符',
    'contactCta.submit': '发送消息',
    'contactCta.success': '感谢！我们会尽快回复您。',

    // --- Works Page ---
    'works.title': '作品集',
    'works.subtitle': '浏览我们在电影、广告、音乐视频、纪录片和虚拟制作领域的精选项目。',
    'works.filterAria': '按类别筛选作品',
    'works.searchLabel': '搜索作品',
    'works.searchPlaceholder': '搜索项目...',
    'works.empty': '未找到符合条件的产品。',
    'works.prev': '上一页',
    'works.next': '下一页',
    'works.prevAria': '上一页',
    'works.nextAria': '下一页',
    'works.paginationAria': '分页',

    // --- Work Detail ---
    'workDetail.notFound': '项目未找到',
    'workDetail.notFoundText': '您查找的项目不存在或已被移除。',
    'workDetail.backToWorks': '返回作品集',
    'workDetail.client': '客户',
    'workDetail.year': '年份',
    'workDetail.role': '角色',
    'workDetail.aboutProject': '关于项目',
    'workDetail.tools': '工具与技术',
    'workDetail.gallery': '画廊',
    'workDetail.watch': '观看视频',
    'workDetail.playVideo': '播放视频',
    'workDetail.credits': '制作团队',
    'workDetail.nextProject': '下一个项目',

    // --- Team ---
    'team.title': '我们的团队',
    'team.subtitle': '一群多元化的电影人、艺术家和技术专家，因对视觉叙事的热爱而聚集在一起。',
    'team.founder': '创始人',
    'team.coreTeam': '核心团队',
    'team.collaborators': '合作伙伴',
    'team.viewProfile': '查看 {name} 的资料',
    'team.experience': '经验',
    'team.closeDrawer': '关闭资料面板',

    // --- Contact Page ---
    'contact.title': '一起创作',
    'contact.subtitle': '有项目想法？我们很乐意倾听。与我们联系，开启一段对话。',
    'contact.infoTitle': '联系我们',
    'contact.infoText': '无论您有清晰的构想还是仅有一个想法，我们都能帮您将其变为现实。通过以下任一渠道联系我们，或使用联系表单。',
    'contact.nameLabel': '姓名',
    'contact.namePlaceholder': '您的全名',
    'contact.nameRequired': '请输入姓名',
    'contact.companyLabel': '公司',
    'contact.companyPlaceholder': '公司或组织',
    'contact.emailLabel': '邮箱',
    'contact.emailPlaceholder': 'you@company.com',
    'contact.emailRequired': '请输入邮箱',
    'contact.emailInvalid': '请输入有效的邮箱地址',
    'contact.messageLabel': '留言',
    'contact.messagePlaceholder': '告诉我们您的项目、时间安排和预算...',
    'contact.messageRequired': '请输入留言',
    'contact.messageMinLength': '请至少输入10个字符',
    'contact.submit': '发送消息',
    'contact.successTitle': '感谢！',
    'contact.successText': '您的消息已发送。我们将在24小时内回复您。',

    // --- Footer ---
    'footer.tagline': '让世界听见你的故事',
    'footer.copyright': '© {year} Echo Media. 保留所有权利。',

    // --- Common ---
    'common.backToTop': '回到顶部',
    'common.skipToMain': '跳到主要内容',
    'common.loading': '加载中...',
  },
};
