const chineseQuestions = [
  { question: "白日依山尽，_____", answer: "黄河入海流", options: ["黄河入海流", "海上明月生", "唯见长江天际流"] },
  { question: "床前明月光，_____", answer: "疑是地上霜", options: ["疑是地上霜", "举头望明月", "低头思故乡"] },
  { question: "春眠不觉晓，_____", answer: "处处闻啼鸟", options: ["处处闻啼鸟", "花落知多少", "夜来风雨声"] },
  { question: "红豆生南国，_____", answer: "春来发几枝", options: ["春来发几枝", "愿君多采撷", "此物最相思"] },
  { question: "少小离家老大回，_____", answer: "乡音无改鬓毛衰", options: ["乡音无改鬓毛衰", "笑问客从何处来", "儿童相见不相识"] },
  { question: "锄禾日当午，_____", answer: "汗滴禾下土", options: ["汗滴禾下土", "谁知盘中餐", "粒粒皆辛苦"] },
  { question: "离离原上草，_____", answer: "一岁一枯荣", options: ["一岁一枯荣", "野火烧不尽", "春风吹又生"] },
  { question: "空山不见人，_____", answer: "但闻人语响", options: ["但闻人语响", "返景入深林", "复照青苔上"] },
  { question: "千山鸟飞绝，_____", answer: "万径人踪灭", options: ["万径人踪灭", "孤舟蓑笠翁", "独钓寒江雪"] },
  { question: "白日放歌须纵酒，_____", answer: "青春作伴好还乡", options: ["青春作伴好还乡", "即从巴峡穿巫峡", "便下襄阳向洛阳"] },
  { question: "独在异乡为异客，_____", answer: "每逢佳节倍思亲", options: ["每逢佳节倍思亲", "遥知兄弟登高处", "遍插茱萸少一人"] },
  { question: "朝辞白帝彩云间，_____", answer: "千里江陵一日还", options: ["千里江陵一日还", "两岸猿声啼不住", "轻舟已过万重山"] },
  { question: "日照香炉生紫烟，_____", answer: "遥看瀑布挂前川", options: ["遥看瀑布挂前川", "飞流直下三千尺", "疑是银河落九天"] },
  { question: "好雨知时节，_____", answer: "当春乃发生", options: ["当春乃发生", "润物细无声", "随风潜入夜"] },
  { question: "小荷才露尖尖角，_____", answer: "早有蜻蜓立上头", options: ["早有蜻蜓立上头", "接天莲叶无穷碧", "映日荷花别样红"] },
  { question: "两个黄鹂鸣翠柳，_____", answer: "一行白鹭上青天", options: ["一行白鹭上青天", "窗含西岭千秋雪", "门泊东吴万里船"] },
  { question: "月落乌啼霜满天，_____", answer: "江枫渔火对愁眠", options: ["江枫渔火对愁眠", "姑苏城外寒山寺", "夜半钟声到客船"] },
  { question: "大漠孤烟直，_____", answer: "长河落日圆", options: ["长河落日圆", "大漠穷秋塞草腓", "孤城落日斗兵稀"] },
  { question: "不知细叶谁裁出，_____", answer: "二月春风似剪刀", options: ["二月春风似剪刀", "万条垂下绿丝绦", "碧玉妆成一树高"] },
  { question: "野火烧不尽，_____", answer: "春风吹又生", options: ["春风吹又生", "远芳侵古道", "晴翠接荒城"] }
];

const geographyQuestions = [
  { type: "flag", question: "这是哪个国家的国旗？🇨🇳", answer: "中国", options: ["中国", "日本", "韩国"] },
  { type: "flag", question: "这是哪个国家的国旗？🇺🇸", answer: "美国", options: ["美国", "英国", "加拿大"] },
  { type: "flag", question: "这是哪个国家的国旗？🇯🇵", answer: "日本", options: ["日本", "韩国", "中国"] },
  { type: "flag", question: "这是哪个国家的国旗？🇬🇧", answer: "英国", options: ["英国", "美国", "澳大利亚"] },
  { type: "flag", question: "这是哪个国家的国旗？🇫🇷", answer: "法国", options: ["法国", "意大利", "德国"] },
  { type: "flag", question: "这是哪个国家的国旗？🇩🇪", answer: "德国", options: ["德国", "法国", "意大利"] },
  { type: "flag", question: "这是哪个国家的国旗？🇰🇷", answer: "韩国", options: ["韩国", "朝鲜", "日本"] },
  { type: "flag", question: "这是哪个国家的国旗？🇦🇺", answer: "澳大利亚", options: ["澳大利亚", "新西兰", "英国"] },
  { type: "flag", question: "这是哪个国家的国旗？🇷🇺", answer: "俄罗斯", options: ["俄罗斯", "乌克兰", "白俄罗斯"] },
  { type: "flag", question: "这是哪个国家的国旗？🇮🇳", answer: "印度", options: ["印度", "巴基斯坦", "孟加拉国"] },
  { type: "flag", question: "这是哪个国家的国旗？🇧🇷", answer: "巴西", options: ["巴西", "阿根廷", "智利"] },
  { type: "flag", question: "这是哪个国家的国旗？🇨🇦", answer: "加拿大", options: ["加拿大", "美国", "墨西哥"] },
  { type: "country", question: "🇷🇺 这是哪个国家？", answer: "俄罗斯", options: ["俄罗斯", "乌克兰", "波兰"] },
  { type: "country", question: "🇮🇹 这是哪个国家？", answer: "意大利", options: ["意大利", "西班牙", "希腊"] },
  { type: "country", question: "🇪🇸 这是哪个国家？", answer: "西班牙", options: ["西班牙", "意大利", "葡萄牙"] },
  { type: "country", question: "🇹🇭 这是哪个国家？", answer: "泰国", options: ["泰国", "越南", "缅甸"] },
  { type: "country", question: "🇻🇳 这是哪个国家？", answer: "越南", options: ["越南", "泰国", "老挝"] },
  { type: "country", question: "🇵🇭 这是哪个国家？", answer: "菲律宾", options: ["菲律宾", "印度尼西亚", "马来西亚"] }
];

const englishWords = [
  { word: "🐶 dog", answer: "dog", options: ["dog", "cat", "pig"] },
  { word: "🐱 cat", answer: "cat", options: ["cat", "dog", "mouse"] },
  { word: "🍎 apple", answer: "apple", options: ["apple", "orange", "banana"] },
  { word: "🍊 orange", answer: "orange", options: ["orange", "apple", "grape"] },
  { word: "🔴 red", answer: "red", options: ["red", "blue", "green"] },
  { word: "🔵 blue", answer: "blue", options: ["blue", "red", "yellow"] },
  { word: "🟢 green", answer: "green", options: ["green", "yellow", "red"] },
  { word: "🐰 rabbit", answer: "rabbit", options: ["rabbit", "bear", "panda"] },
  { word: "🐼 panda", answer: "panda", options: ["panda", "bear", "tiger"] },
  { word: "🦁 lion", answer: "lion", options: ["lion", "tiger", "elephant"] },
  { word: "🐘 elephant", answer: "elephant", options: ["elephant", "lion", "monkey"] },
  { word: "🐒 monkey", answer: "monkey", options: ["monkey", "dog", "cat"] },
  { word: "🍌 banana", answer: "banana", options: ["banana", "apple", "grape"] },
  { word: "🍇 grape", answer: "grape", options: ["grape", "banana", "orange"] },
  { word: "🌸 flower", answer: "flower", options: ["flower", "tree", "grass"] },
  { word: "🌳 tree", answer: "tree", options: ["tree", "flower", "grass"] },
  { word: "⭐ star", answer: "star", options: ["star", "moon", "sun"] },
  { word: "☀️ sun", answer: "sun", options: ["sun", "moon", "star"] },
  { word: "🌙 moon", answer: "moon", options: ["moon", "sun", "star"] },
  { word: "🚗 car", answer: "car", options: ["car", "bus", "bike"] }
];

function generateMathQuestion() {
  const operators = ['+', '-'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  let a, b, answer;
  
  if (operator === '+') {
    a = Math.floor(Math.random() * 10);
    b = Math.floor(Math.random() * (10 - a));
    answer = a + b;
  } else {
    a = Math.floor(Math.random() * 10) + 1;
    b = Math.floor(Math.random() * a);
    answer = a - b;
  }
  
  const wrongAnswers = new Set();
  while (wrongAnswers.size < 2) {
    const wrong = answer + Math.floor(Math.random() * 5) - 2;
    if (wrong !== answer && wrong >= 0 && wrong <= 10) {
      wrongAnswers.add(wrong);
    }
  }
  
  const options = [...wrongAnswers, answer].sort(() => Math.random() - 0.5);
  
  return {
    question: `${a} ${operator === '+' ? '+' : '-'} ${b} = ?`,
    answer: answer.toString(),
    options: options.map(String)
  };
}

function getRandomQuestions(type, count, userData, subject) {
  let questions = [];
  
  if (type === 'chinese') {
    const pool = [...chineseQuestions];
    questions = pool.sort(() => Math.random() - 0.5).slice(0, count);
  } else if (type === 'math') {
    for (let i = 0; i < count; i++) {
      questions.push(generateMathQuestion());
    }
  } else if (type === 'english') {
    const pool = [...englishWords];
    questions = pool.sort(() => Math.random() - 0.5).slice(0, count);
  } else if (type === 'geography') {
    const pool = [...geographyQuestions];
    questions = pool.sort(() => Math.random() - 0.5).slice(0, count);
  }
  
  return questions;
}

function getWrongQuestions(userData, subject, count) {
  const wrongKey = `${subject}_wrong`;
  const wrongQuestions = userData[wrongKey] || [];
  
  const now = Date.now();
  const availableWrong = wrongQuestions.filter(q => {
    const daysSinceError = (now - q.lastError) / (1000 * 60 * 60 * 24);
    return daysSinceError >= 1;
  });
  
  if (availableWrong.length >= count) {
    return availableWrong.sort(() => Math.random() - 0.5).slice(0, count);
  }
  
  return null;
}

function updateWrongQuestion(userData, subject, question, isCorrect) {
  const wrongKey = `${subject}_wrong`;
  if (!userData[wrongKey]) {
    userData[wrongKey] = [];
  }
  
  const wrongQuestions = userData[wrongKey];
  const existingIndex = wrongQuestions.findIndex(q => 
    q.question === question.question && q.answer === question.answer
  );
  
  if (isCorrect) {
    if (existingIndex !== -1) {
      wrongQuestions[existingIndex].correctCount = (wrongQuestions[existingIndex].correctCount || 0) + 1;
      wrongQuestions[existingIndex].lastError = Date.now();
      
      if (wrongQuestions[existingIndex].correctCount >= 3) {
        wrongQuestions.splice(existingIndex, 1);
      }
    }
  } else {
    if (existingIndex === -1) {
      wrongQuestions.push({
        ...question,
        lastError: Date.now(),
        correctCount: 0
      });
    } else {
      wrongQuestions[existingIndex].lastError = Date.now();
    }
  }
  
  userData[wrongKey] = wrongQuestions;
  saveUserData(userData);
}

if (typeof module !== 'undefined') {
  module.exports = {
    chineseQuestions,
    geographyQuestions,
    englishWords,
    generateMathQuestion,
    getRandomQuestions,
    getWrongQuestions,
    updateWrongQuestion
  };
}
