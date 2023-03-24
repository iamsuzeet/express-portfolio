import { Province } from './province.model';
import { db } from './../../model/index';
import { QueryTypes } from 'sequelize';

class ProvinceRepository {
  async getAllProvince() {
    return await Province.findAll();
  }

  async getProvinceById(provinceId: string) {
    return await db.sequelize.query(
      `SELECT * from province WHERE id = :provinceId`,
      {
        replacements: { provinceId },
      }
    );
  }
}

export default new ProvinceRepository();
