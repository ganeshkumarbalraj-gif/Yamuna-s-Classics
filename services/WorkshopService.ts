import { workshops } from "@/data/workshops";

class WorkshopService {
  getAll() {
    return workshops;
  }

  getFeatured() {
    return workshops.filter(
      (w) => w.featured
    );
  }

  getBySlug(slug: string) {
    return workshops.find(
      (w) => w.slug === slug
    );
  }

  getRelated(
    level: string,
    currentId: string
  ) {
    return workshops
      .filter(
        (w) =>
          w.level === level &&
          w.id !== currentId
      )
      .slice(0, 3);
  }

  getLevels() {
    return [
      ...new Set(
        workshops.map((w) => w.level)
      ),
    ];
  }
}

const workshopService = new WorkshopService();

export default workshopService;