import { fromJS } from 'immutable';
import {} from './constants';

const defaultStore = fromJS({
  title: '不逼自己一把，你永远不知道自己有多优秀',
  content: '<img src="//upload-images.jianshu.io/upload_images/11205919-1641a08a08e6b23d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/700/format/webp" alt="" /><p>我见过一个姑娘，在她23岁的生命里，她奋斗了23年。她是一个很简单很可爱的姑娘，我们俩是邻居，从小一起长大，我见证了她成长的过程。</p><p>我们俩家是农村的，我小时候就知道她和我们不太一样，因为她有个傻妈妈，那时候有好多小孩都欺负她，当着她的面大声喊：“傻子的孩子。”</p><p>虽然在这样的环境下长大，她一点都没有丧失坚强，记得她高考那一年考了一个二本学校的计算机专业。周围的人没有听说过她上的大学的名字，也因为她家里很困难，就对她爸爸说：<b>“小女孩上啥大学，你不如就让她去打工，给家里赚几年钱就嫁出去了，还能拿到一部分彩礼给你家老二娶媳妇。”</b></p><p>她很害怕她爸爸不让她去上学，就对她爸爸说，就试着劝他，并保证学费贷款，生活费自己出。终于她爸爸点头让她去上大学。</p><p>在大学里，她永远是最忙碌的一个，学习，上课，做兼职，永远在奔波。但是这样她仍然每年拿奖学金，甚至有一年拿了国家奖学金8000元。假期里，永远都是在打工，刚开始大一大二的时候，为了赚钱，假期里去工厂生产线打工，一天要工作十个小时。。我说的这些绝不夸张，有照片为证。</p>'
});

export default (state = defaultStore, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
