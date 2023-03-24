import provinceRepository from './province.repository';

class ProvinceService {
  async getAllProvince() {
    return await provinceRepository.getAllProvince();
  }

  async getProvinceById(provinceId: string) {
    const province = await provinceRepository.getProvinceById(provinceId);
    if (!province?.[0]?.length) {
      throw new Error('Not found');
    }
    return province[0][0];
  }
}

export default new ProvinceService();
