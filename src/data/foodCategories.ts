// Danh sách món ăn theo thể loại

export interface Food {
  id: string;
  name: string;
  color: string;
  category: 'lunch' | 'snack' | 'drink';
  imageUrl?: string;
}

// Mảng màu sắc cho các món ăn
const COLORS = [
  '#FF6B6B', '#4ECDC4', '#FFD166', '#06D6A0', '#118AB2', 
  '#EF476F', '#FFC43D', '#1B9AAA', '#6A0572', '#AB83A1',
  '#F15BB5', '#9B5DE5', '#00BBF9', '#00F5D4', '#FEE440'
];

// Hàm lấy màu ngẫu nhiên từ mảng COLORS
const getRandomColor = (): string => {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
};

// Danh sách món ăn trưa
export const lunchFoods: Food[] = [
  { id: 'l1', name: 'Cơm tấm sườn', color: getRandomColor(), category: 'lunch' },
  { id: 'l2', name: 'Phở bò', color: getRandomColor(), category: 'lunch' },
  { id: 'l3', name: 'Bún chả', color: getRandomColor(), category: 'lunch' },
  { id: 'l4', name: 'Bún bò Huế', color: getRandomColor(), category: 'lunch' },
  { id: 'l5', name: 'Bánh mì thịt', color: getRandomColor(), category: 'lunch' },
  { id: 'l6', name: 'Cơm gà', color: getRandomColor(), category: 'lunch' },
  { id: 'l7', name: 'Cơm bình dân', color: getRandomColor(), category: 'lunch' },
  { id: 'l8', name: 'Mì Quảng', color: getRandomColor(), category: 'lunch' },
  { id: 'l9', name: 'Bún riêu cua', color: getRandomColor(), category: 'lunch' },
  { id: 'l10', name: 'Cơm rang dưa bò', color: getRandomColor(), category: 'lunch' },
  { id: 'l11', name: 'Bánh đa trộn', color: getRandomColor(), category: 'lunch' },
  { id: 'l12', name: 'Bún đậu mắm tôm', color: getRandomColor(), category: 'lunch' },
  { id: 'l13', name: 'Cơm niêu Singapore', color: getRandomColor(), category: 'lunch' },
  { id: 'l14', name: 'Phở gà', color: getRandomColor(), category: 'lunch' },
  { id: 'l15', name: 'Phở bò', color: getRandomColor(), category: 'lunch' },
  { id: 'l16', name: 'Cơm sườn chua ngọt', color: getRandomColor(), category: 'lunch' },
  { id: 'l17', name: 'Bún cá', color: getRandomColor(), category: 'lunch' },
  { id: 'l18', name: 'Miến gà', color: getRandomColor(), category: 'lunch' },
  { id: 'l19', name: 'Cơm rang thập cẩm', color: getRandomColor(), category: 'lunch' },
  { id: 'l20', name: 'Bánh đa cua', color: getRandomColor(), category: 'lunch' },
  { id: 'l21', name: 'Gì cũng được', color: getRandomColor(), category: 'lunch' },
];

// Danh sách đồ ăn vặt
export const snackFoods: Food[] = [
  { id: 's1', name: 'Bánh tráng trộn', color: getRandomColor(), category: 'snack' },
  { id: 's2', name: 'Bánh tráng nướng', color: getRandomColor(), category: 'snack' },
  { id: 's3', name: 'Khoai tây chiên', color: getRandomColor(), category: 'snack' },
  { id: 's4', name: 'Bánh xèo', color: getRandomColor(), category: 'snack' },
  { id: 's5', name: 'Bánh bột lọc', color: getRandomColor(), category: 'snack' },
  { id: 's6', name: 'Chè thái', color: getRandomColor(), category: 'snack' },
  { id: 's7', name: 'Bánh flan', color: getRandomColor(), category: 'snack' },
  { id: 's8', name: 'Bánh cuốn', color: getRandomColor(), category: 'snack' },
  { id: 's9', name: 'Xôi gà', color: getRandomColor(), category: 'snack' },
  { id: 's10', name: 'Chuối chiên', color: getRandomColor(), category: 'snack' },
  { id: 's11', name: 'Bánh rán', color: getRandomColor(), category: 'snack' },
  { id: 's12', name: 'Bánh bao', color: getRandomColor(), category: 'snack' },
  { id: 's13', name: 'Nem chua rán', color: getRandomColor(), category: 'snack' },
  { id: 's14', name: 'Bánh gối', color: getRandomColor(), category: 'snack' },
  { id: 's15', name: 'Bánh mì nướng muối ớt', color: getRandomColor(), category: 'snack' },
  { id: 's16', name: 'Bánh chuối nướng', color: getRandomColor(), category: 'snack' },
  { id: 's17', name: 'Kẹo bông gòn', color: getRandomColor(), category: 'snack' },
  { id: 's18', name: 'Kem', color: getRandomColor(), category: 'snack' },
  { id: 's19', name: 'Bắp xào', color: getRandomColor(), category: 'snack' },
  { id: 's20', name: 'Chả giò', color: getRandomColor(), category: 'snack' },
  { id: 's21', name: 'Gì cũng được', color: getRandomColor(), category: 'snack' },
];

// Danh sách đồ uống
export const drinkFoods: Food[] = [
  { id: 'd1', name: 'Cà phê sữa đá', color: getRandomColor(), category: 'drink' },
  { id: 'd2', name: 'Trà đào cam sả', color: getRandomColor(), category: 'drink' },
  { id: 'd3', name: 'Sinh tố bơ', color: getRandomColor(), category: 'drink' },
  { id: 'd4', name: 'Nước mía', color: getRandomColor(), category: 'drink' },
  { id: 'd5', name: 'Trà sữa trân châu', color: getRandomColor(), category: 'drink' },
  { id: 'd6', name: 'Sữa tươi', color: getRandomColor(), category: 'drink' },
  { id: 'd7', name: 'Nước dừa tươi', color: getRandomColor(), category: 'drink' },
  { id: 'd8', name: 'Sinh tố xoài', color: getRandomColor(), category: 'drink' },
  { id: 'd9', name: 'Cà phê đen đá', color: getRandomColor(), category: 'drink' },
  { id: 'd10', name: 'Soda chanh', color: getRandomColor(), category: 'drink' },
  { id: 'd11', name: 'Nước ép cam', color: getRandomColor(), category: 'drink' },
  { id: 'd12', name: 'Trà đá', color: getRandomColor(), category: 'drink' },
  { id: 'd13', name: 'Sinh tố dâu', color: getRandomColor(), category: 'drink' },
  { id: 'd14', name: 'Nước ép dưa hấu', color: getRandomColor(), category: 'drink' },
  { id: 'd15', name: 'Matcha đá xay', color: getRandomColor(), category: 'drink' },
  { id: 'd16', name: 'Sữa chua đánh đá', color: getRandomColor(), category: 'drink' },
  { id: 'd17', name: 'Cacao nóng', color: getRandomColor(), category: 'drink' },
  { id: 'd18', name: 'Trà chanh', color: getRandomColor(), category: 'drink' },
  { id: 'd19', name: 'Nước ép táo', color: getRandomColor(), category: 'drink' },
  { id: 'd20', name: 'Smoothie việt quất', color: getRandomColor(), category: 'drink' },
  { id: 'd21', name: 'Gì cũng được', color: getRandomColor(), category: 'drink' },
];

// Tất cả các món ăn
export const allFoods: Food[] = [...lunchFoods, ...snackFoods, ...drinkFoods];

// Lấy danh sách món ăn theo thể loại
export const getFoodsByCategory = (category: 'lunch' | 'snack' | 'drink'): Food[] => {
  return allFoods.filter(food => food.category === category);
};