// https://www.cnblogs.com/sbb-first-blog/p/13259728.html

function calculateIncomeTax(rmb: number): number {
  /** 1人民币 等于 187.97韩币 */
  const RMB2KRW = 187.97
  const profit = rmb * RMB2KRW
  // 所得税税率
  const incomeTaxRates = {
    firstBracket: 0.10, // 2亿以下
    secondBracket: 0.20, // 2-200亿
    thirdBracket: 0.22 // 200亿以上
  };
  // 所得税区间
  const incomeTaxBrackets = {
    firstBracket: 200000000, // 2亿
    secondBracket: 20000000000 // 200亿
  };

  let incomeTax: number;

  if (profit <= incomeTaxBrackets.firstBracket) {
    incomeTax = profit * incomeTaxRates.firstBracket;
  } else if (profit <= incomeTaxBrackets.secondBracket) {
    incomeTax = (incomeTaxBrackets.firstBracket * incomeTaxRates.firstBracket) +
                ((profit - incomeTaxBrackets.firstBracket) * incomeTaxRates.secondBracket);
  } else {
    incomeTax = (incomeTaxBrackets.firstBracket * incomeTaxRates.firstBracket) +
                ((incomeTaxBrackets.secondBracket - incomeTaxBrackets.firstBracket) * incomeTaxRates.secondBracket) +
                ((profit - incomeTaxBrackets.secondBracket) * incomeTaxRates.thirdBracket);
  }
  const rmbResult = incomeTax / 187
  return rmbResult;
}

// 示例
const profit = 300000000; // 假设公司盈利3亿韩元
const incomeTax = calculateIncomeTax(profit);
console.log(incomeTax); // 应交所得税
/** 1人民币 等于 187.97韩币 */
const RMB2KRW = 187.97
/**
 * 总价值: Nums 总库存 * (定价 * 折扣 * 0.895平台抽成) / RMB2KRW
 * turnover 营业额人民币: 销售数量 * (定价 * 折扣 * 0.895平台抽成) / RMB2KRW
 * 后程韩国邮寄费用(人民币): 销售数量 * (3000 * rate) / RMB2KRW
 * Freight 中国货运费用: Nums * Freight
 * Cost 中国囤货成本: Nums * cost
 * 最终盈利等于 result - incomeTax(result)
 * @param SalesNums 销售数量
 * @param RMB2KRW 1人民币 等于 187.97韩币
 * @param Nums 总囤货数量
 * @param Price 商品销售定价是韩币
 * @param cost 商品成本单价是人民币 
 * @param Freight 商品运输成本单价是人民币
 * @param Discount 折扣 default默认为 1
 * @param rate 物流优惠折扣 default默认为 1
 * @returns Result 利润是人民币 = turnover - Cost - Freight - 后程韩国邮寄费用
 * @returns getsNumber 多少销售数量 我能赚钱有利润
 */
 
/** 1人民币 等于 187.97韩币 */
const RMB2KRW = 187.97

function calculateIncome2Tax(rmb: number): string {
  const profit = rmb * RMB2KRW
  // 所得税税率
  const incomeTaxRates = {
    firstBracket: 0.10, // 2亿以下
    secondBracket: 0.20, // 2-200亿
    thirdBracket: 0.22 // 200亿以上
  };
  // 所得税区间
  const incomeTaxBrackets = {
    firstBracket: 200000000, // 2亿
    secondBracket: 20000000000 // 200亿
  };

  let incomeTax: number;

  if (profit <= incomeTaxBrackets.firstBracket) {
    incomeTax = profit * incomeTaxRates.firstBracket;
  } else if (profit <= incomeTaxBrackets.secondBracket) {
    incomeTax = (incomeTaxBrackets.firstBracket * incomeTaxRates.firstBracket) +
                ((profit - incomeTaxBrackets.firstBracket) * incomeTaxRates.secondBracket);
  } else {
    incomeTax = (incomeTaxBrackets.firstBracket * incomeTaxRates.firstBracket) +
                ((incomeTaxBrackets.secondBracket - incomeTaxBrackets.firstBracket) * incomeTaxRates.secondBracket) +
                ((profit - incomeTaxBrackets.secondBracket) * incomeTaxRates.thirdBracket);
  }
  const rmbResult = incomeTax / 187
  // console.log(`如果盈利 ${rmb} 的话，需要缴纳：${rmbResult.toFixed(2)} ¥人民币`)
  return rmbResult.toFixed(2);
}
function calculateProfit(SalesNums: number, Nums: number, Price: number, Discount: number = 1, rate: number = 1): any {
    const platformCut = 0.895; // 平台抽成比例
    // 计算运费和成本（基于销售数量）
    const Freight = Nums * 0.35;
    const Cost = Nums * 5;
    // 计算营业额（人民币）
    const turnover = SalesNums * (Price * Discount * platformCut) / RMB2KRW;
    // 计算后程韩国邮寄费用（人民币）
    const postCostKR = SalesNums * (3000 * rate) / RMB2KRW;
    // 计算利润（人民币）
    const profit = turnover - Cost - Freight - postCostKR;
    // 计算所得税（人民币）
    const tax = parseFloat(calculateIncomeTax(profit));
    // 扣除所得税后的净利润
    const netProfit = profit - tax;

    const result = netProfit.toFixed(2);
    // console.log(`净盈利: ${result}`);
    return {
        result: result,
        oneResult: (netProfit / SalesNums).toFixed(2)
    };
}
const result = calculateProfit(380, 380, 7900);
console.log(`净盈利: ${result.result} ${result.oneResult}`);
function calculateBreakEven(Nums: number, Price: number, Discount: number = 1, rate: number = 1): number {
    let SalesNums = 0; // 初始化销售数量
    let profitResult; // 用来存储计算利润的结果
    
    // 循环增加销售数量，直到净利润大于0
    do {
        SalesNums++;
        profitResult = calculateProfit(SalesNums, Nums, Price, Discount, rate);
    } while (parseFloat(profitResult.result) <= 0 && SalesNums <= Nums); // 也要确保销售数量不超过总库存
    
    // 如果超过总库存还没有盈利，则返回-1表示无法盈利
    if (SalesNums > Nums) {
        return -1;
    }
    
    return SalesNums; // 返回达到盈利所需的销售数量
}
const getNumebrs = calculateBreakEven(380, 10900);
console.log('111', getNumebrs);