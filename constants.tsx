
import React from 'react';
import { Competency, CompetencyDomain } from './types';

export const COMPETENCY_FRAMEWORK: Competency[] = [
  {
    id: 'c1',
    domain: CompetencyDomain.INFORMATION,
    title: 'Duyệt, tìm kiếm và lọc dữ liệu',
    description: 'Xác định, định vị, truy xuất, lưu trữ, tổ chức và phân tích thông tin số.',
    levels: [
      { level: 1, description: 'Biết tìm kiếm thông tin cơ bản.' },
      { level: 2, description: 'Biết đánh giá độ tin cậy của nguồn tin.' }
    ]
  },
  {
    id: 'c2',
    domain: CompetencyDomain.COMMUNICATION,
    title: 'Tương tác qua công nghệ số',
    description: 'Giao tiếp thông qua các thiết bị và ứng dụng kỹ thuật số.',
    levels: [
      { level: 1, description: 'Sử dụng email và nhắn tin cơ bản.' },
      { level: 2, description: 'Quản lý danh tính số cá nhân.' }
    ]
  },
  {
    id: 'c3',
    domain: CompetencyDomain.CREATION,
    title: 'Phát triển nội dung số',
    description: 'Tạo và chỉnh sửa nội dung mới, tích hợp và tái lập tri thức.',
    levels: [
      { level: 1, description: 'Tạo văn bản và hình ảnh đơn giản.' },
      { level: 2, description: 'Hiểu về bản quyền và giấy phép số.' }
    ]
  },
  {
    id: 'c4',
    domain: CompetencyDomain.SAFETY,
    title: 'Bảo vệ thiết bị',
    description: 'Bảo vệ thiết bị, nội dung, dữ liệu cá nhân và quyền riêng tư.',
    levels: [
      { level: 1, description: 'Sử dụng mật khẩu mạnh.' },
      { level: 2, description: 'Nhận biết các rủi ro bảo mật trực tuyến.' }
    ]
  }
];

export const APP_CONFIG = {
  MODEL: 'gemini-3-flash-preview',
  SYSTEM_INSTRUCTION: `Bạn là một chuyên gia về khung năng lực số dành cho giáo viên và học sinh (dựa trên DigComp và khung Việt Nam).
Nhiệm vụ của bạn là giúp giáo viên tích hợp các năng lực số vào giáo án của họ một cách tự nhiên và hiệu quả.
Hãy phân tích nội dung người dùng cung cấp và đề xuất các năng lực số phù hợp nhất kèm theo hoạt động cụ thể.`
};
