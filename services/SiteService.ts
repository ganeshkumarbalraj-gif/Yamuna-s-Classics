import { siteConfig } from "@/config/site";

class SiteService {
  getSite() {
    return siteConfig;
  }

  getBusinessName() {
    return siteConfig.business.name;
  }

  getPhone() {
    return siteConfig.business.phone;
  }

  getWhatsApp() {
    return siteConfig.business.whatsapp;
  }

  getEmail() {
    return siteConfig.business.email;
  }

  getAddress() {
    return siteConfig.business.address;
  }

  getWebsite() {
    return siteConfig.website.url;
  }

  getLogo() {
    return siteConfig.website.logo;
  }
}

const siteService = new SiteService();

export default siteService;