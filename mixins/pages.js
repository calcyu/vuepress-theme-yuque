export default {
    computed: {
        $showSubSideBar() {
            const {
                $themeConfig: { subSidebar: themeSubSidebar },
                $frontmatter: { subSidebar: pageSubSidebar }
            } = this

            const headers = this.$page.headers || []

            return [themeSubSidebar, pageSubSidebar].indexOf('false') == -1 &&
                headers.length > 0
        },
        $isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
            return flag;
        }
    },

}