import { defualtInstance } from '../utils/instance';

export const getList = async () => {
    try {
        const result = await defualtInstance.get('/api/video')
        return result
    }
    catch (error) {
        console.error('영상 데이터를 불러오는 중에 오류가 발생했습니다:', error);
    }
}
