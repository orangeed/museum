import type { LoginForm } from '@/types/pages/loginandreg';
import { request } from '@/utils/request';

// 登录
export const login = (data: LoginForm): Promise<any> => request({ url: '/login', method:'POST', data });
