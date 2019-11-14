import scienceKnowledgeAPI from './product-manage/science-knowledge';
import subjectKnowledgeAPI from './product-manage/subject-knowledge';
import themeKnowledgeAPI from './product-manage/theme-knowledge';
import bookMatchingAPI from './product-manage/book-matching';
import comingSoonAPI from './product-manage/coming-soon';
import weekNoticeAPI from './product-manage/week-notice';
import soonNoticeAPI from './product-manage/soon-notice';
import Mock from 'mockjs';
import userAPI from './user';
import tableAPI from './table';
import usersAPI from './users';
import iWonderAPI from './user-feedback/i-wonder';
import businessCooperationAPI from './user-feedback/business-cooperation';
import systemSettingsAPI from './system-settings';
import hardwareBigScreenAPI from './enterprise-manage/hardware-big-screen';
import resourceAllocationAPI from './enterprise-manage/resourceAllocation';
import orderListAPI from './enterprise-manage/order-list';
import loginLogAPI from './enterprise-manage/login-log';
import statisticalAnalysisAPI from './enterprise-manage/statistical-analysis';

import bioscienceOrderAPI from './finance-manage/bioscience-order';
import comprehensiveStatisticsAPI from './finance-manage/comprehensive-statistics';
import incomeAnalysisAPI from './finance-manage/income-analysis';
import incomeRecordAPI from './finance-manage/income-record';
import otherIncomeAPI from './finance-manage/other-income';
import withdrawalApplicationAPI from './finance-manage/withdrawal-application';

import addSecondaryAgentAPI from './channel-manage/add-secondary-agent';
import cashCouponsExpiredAPI from './channel-manage/cash-coupons-expired';
import cashCouponsManageAPI from './channel-manage/cash-coupons-manage';
import cashCouponsUnusedAPI from './channel-manage/cash-coupons-unused';
import cashCouponsUseAPI from './channel-manage/cash-coupons-use';
import loginLog1API from './channel-manage/login-log';
import myIncomeAPI from './channel-manage/my-income';
import secondaryAgentManageAPI from './channel-manage/secondary-agent-manage';
import secondaryAgentWithdrawalsApplyAPI from './channel-manage/secondary-agent-withdrawals-apply';
import withdrawalsRecordAPI from './channel-manage/withdrawals-record';

// Fix an issue with setting withCredentials = true, cross-domain request lost cookies
// https://github.com/nuysoft/Mock/issues/300
Mock.XHR.prototype.proxy_send = Mock.XHR.prototype.send;
Mock.XHR.prototype.send = function() {
  if (this.custom.xhr) {
    this.custom.xhr.withCredentials = this.withCredentials || false;
  }
  this.proxy_send(...arguments);
};
// Mock.setup({
//   timeout: '350-600'
// })

// User
Mock.mock(/\/user\/login/, 'post', userAPI.login);
Mock.mock(/\/user\/info/, 'get', userAPI.getInfo);
Mock.mock(/\/user\/logout/, 'post', userAPI.logout);

// Table
Mock.mock(/\/table\/list/, 'get', tableAPI.list);

//users
Mock.mock(/\/users\/list/, 'get', usersAPI.list);
Mock.mock(/\/users\/detail/, 'get', usersAPI.detail);

// user-feedback
Mock.mock(/\/userFeedback\/iWonder\/list/, 'get', iWonderAPI.list);
Mock.mock(/\/userFeedback\/businessCooperation\/list/, 'get',
    businessCooperationAPI.list);

// product-manage
Mock.mock(/\/product-manage\/scienceKnowledge\/list/, 'get', scienceKnowledgeAPI.list);
Mock.mock(/\/product-manage\/scienceKnowledge\/detail/, 'get', scienceKnowledgeAPI.detail);
Mock.mock(/\/product-manage\/subjectKnowledge\/list/, 'get', subjectKnowledgeAPI.list);
Mock.mock(/\/product-manage\/subjectKnowledge\/detail/, 'get', subjectKnowledgeAPI.detail);
Mock.mock(/\/product-manage\/themeKnowledge\/list/, 'get', themeKnowledgeAPI.list);
Mock.mock(/\/product-manage\/themeKnowledge\/detail/, 'get', themeKnowledgeAPI.detail);
Mock.mock(/\/product-manage\/themeKnowledge\/resourceList/, 'get', themeKnowledgeAPI.resourceList);
Mock.mock(/\/product-manage\/bookMatching\/list/, 'get', bookMatchingAPI.list);
Mock.mock(/\/product-manage\/bookMatching\/detail/, 'get', bookMatchingAPI.detail);
Mock.mock(/\/product-manage\/comingSoon\/list/, 'get', comingSoonAPI.list);
Mock.mock(/\/product-manage\/comingSoon\/detail/, 'get', comingSoonAPI.detail);
Mock.mock(/\/product-manage\/weekNotice\/list/, 'get', weekNoticeAPI.list);
Mock.mock(/\/product-manage\/weekNotice\/detail/, 'get', weekNoticeAPI.detail);
Mock.mock(/\/product-manage\/soonNotice\/list/, 'get', soonNoticeAPI.list);
Mock.mock(/\/product-manage\/soonNotice\/detail/, 'get', soonNoticeAPI.detail);

// enterprise-manage
Mock.mock(/\/enterprise-manage\/hardwareBigScreen\/list/, 'get', hardwareBigScreenAPI.list);
Mock.mock(/\/enterprise-manage\/hardwareBigScreen\/detail/, 'get', hardwareBigScreenAPI.detail);
Mock.mock(/\/enterprise-manage\/hardwareBigScreen\/resource/, 'get', hardwareBigScreenAPI.resource);
Mock.mock(/\/enterprise-manage\/resourceAllocation\/list/, 'get', resourceAllocationAPI.list);
Mock.mock(/\/enterprise-manage\/resourceAllocation\/detail/, 'get', resourceAllocationAPI.detail);
Mock.mock(/\/enterprise-manage\/resourceAllocation\/resource/, 'get', resourceAllocationAPI.resource);
Mock.mock(/\/enterprise-manage\/orderList\/list/, 'get', orderListAPI.list);
Mock.mock(/\/enterprise-manage\/loginLog\/list/, 'get', loginLogAPI.list);
Mock.mock(/\/enterprise-manage\/statisticalAnalysis\/list/, 'get', statisticalAnalysisAPI.list);

// finance-manage
Mock.mock(/\/finance-manage\/bioscienceOrder\/list/, 'get', bioscienceOrderAPI.list);
Mock.mock(/\/finance-manage\/comprehensiveStatistics\/list/, 'get', comprehensiveStatisticsAPI.list);
Mock.mock(/\/finance-manage\/incomeAnalysis\/list/, 'get', incomeAnalysisAPI.list);
Mock.mock(/\/finance-manage\/incomeAnalysis\/incomeList/, 'get', incomeAnalysisAPI.incomeList);
Mock.mock(/\/finance-manage\/incomeRecord\/list/, 'get', incomeRecordAPI.list);
Mock.mock(/\/finance-manage\/otherIncome\/list/, 'get', otherIncomeAPI.list);
Mock.mock(/\/finance-manage\/otherIncome\/detail/, 'get', otherIncomeAPI.detail);
Mock.mock(/\/finance-manage\/withdrawalApplication\/list/, 'get', withdrawalApplicationAPI.list);
Mock.mock(/\/finance-manage\/withdrawalApplication\/detail/, 'get', withdrawalApplicationAPI.detail);
Mock.mock(/\/finance-manage\/withdrawalApplication\/withdrawalList/, 'get', withdrawalApplicationAPI.withdrawalList);

// channel-manage
Mock.mock(/\/channel-manage\/myIncome\/list/, 'get', myIncomeAPI.list);
Mock.mock(/\/channel-manage\/myIncome\/detail/, 'get', myIncomeAPI.detail);
Mock.mock(/\/channel-manage\/myIncome\/withdrawalList/, 'get', myIncomeAPI.withdrawalList);
Mock.mock(/\/channel-manage\/cashCouponsManage\/list/, 'get', cashCouponsManageAPI.list);
Mock.mock(/\/channel-manage\/cashCouponsUse\/list/, 'get', cashCouponsUseAPI.list);
Mock.mock(/\/channel-manage\/cashCouponsUnused\/list/, 'get', cashCouponsUnusedAPI.list);
Mock.mock(/\/channel-manage\/cashCouponsExpired\/list/, 'get', cashCouponsExpiredAPI.list);
Mock.mock(/\/channel-manage\/withdrawalsRecord\/list/, 'get', withdrawalsRecordAPI.list);
Mock.mock(/\/channel-manage\/withdrawalsRecord\/detail/, 'get', withdrawalsRecordAPI.detail);
Mock.mock(/\/channel-manage\/withdrawalsRecord\/withdrawalList/, 'get', withdrawalsRecordAPI.withdrawalList);
Mock.mock(/\/channel-manage\/loginLog\/list/, 'get', loginLog1API.list);
Mock.mock(/\/channel-manage\/addSecondaryAgent\/list/, 'get', addSecondaryAgentAPI.list);
Mock.mock(/\/channel-manage\/secondaryAgentManage\/list/, 'get', secondaryAgentManageAPI.list);
Mock.mock(/\/channel-manage\/secondaryAgentManage\/detail/, 'get', secondaryAgentManageAPI.detail);
Mock.mock(/\/channel-manage\/secondaryAgentWithdrawalsApply\/list/, 'get', secondaryAgentWithdrawalsApplyAPI.list);
Mock.mock(/\/channel-manage\/secondaryAgentWithdrawalsApply\/detail/, 'get', secondaryAgentWithdrawalsApplyAPI.detail);
Mock.mock(/\/channel-manage\/secondaryAgentWithdrawalsApply\/withdrawalList/, 'get', secondaryAgentWithdrawalsApplyAPI.withdrawalList);


// system-settings
Mock.mock(/\/systemSettings\/list/, 'get', systemSettingsAPI.list);
Mock.mock(/\/systemSettings\/detail/, 'get', systemSettingsAPI.detail);
export default Mock;
