// Bạn được cho một mảng giá cổ phiếu theo từng ngày. Mỗi phần tử trong mảng đại diện cho giá cổ phiếu vào ngày đó.
// Mục tiêu: Tìm lợi nhuận tối đa mà bạn có thể đạt được.
// Quy tắc:

// Bạn chỉ được mua một lần và bán một lần
// Bạn phải mua trước rồi mới được bán (không bán khống)
// Nếu không có lợi nhuận, trả về 0

// Ví dụ minh họa:
// Với mảng prices = [7, 1, 5, 3, 6, 4]:

// Ngày 0: giá = 7
// Ngày 1: giá = 1
// Ngày 2: giá = 5
// Ngày 3: giá = 3
// Ngày 4: giá = 6
// Ngày 5: giá = 4

// Kết quả tốt nhất: Mua ở ngày 1 (giá 1) và bán ở ngày 4 (giá 6)
// → Lợi nhuận = 6 - 1 = 5

function maxProfit(prices) {
  if(prices.length <= 1) return 0;

  let minPrice = prices[0];
  let maxProfit = 0;
  const length = prices.length;

  for(let i = 1; i < length; i++) {
    let profit = prices[i] - minPrice;


   if(maxProfit < profit) {
      maxProfit = profit;
   }

    if(minPrice > prices[i]) {
      minPrice = prices[i];
    }
  }

  return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5
console.log(maxProfit([7, 6, 4, 3, 1]));     // Output: 0 (giá giảm liên tục)