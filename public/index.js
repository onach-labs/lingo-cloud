// @license magnet:?xt=urn:btih:1f739d935676111cfff4b4693e3816e664797050&dn=gpl-3.0.txt GPL-3.0-or-later
class ApplicationWindow {
    constructor(appContent, appName) {
        this.appContent = appContent;
        this.appName = appName;
    }
    close() {
        return `App has closed`;
    }
}
// @license-end
