import Vue from "vue";
import Router from "vue-router";
import home from "@/page/home";
import login from "@/page/login/login";
import mainPage from "@/page/mainPage/mainPage";
import managerPage from "@/page/managerPage/managerPage";
import docManager from "@/page/managerPage/docManager";

import basic from "@/page/basicInfoManage/basic"
import address from "@/page/basicInfoManage/address";
import build from "@/page/basicInfoManage/build";
import car from "@/page/basicInfoManage/car";
import company from "@/page/basicInfoManage/company";
import employee from "@/page/basicInfoManage/employee";
import equipment from "@/page/basicInfoManage/equipment";
import goods from "@/page/basicInfoManage/goods";
import certification from "@/page/basicInfoManage/certification";
import material from "@/page/basicInfoManage/material";

import buildManage from "@/page/buyAndSaleManage/buildManage";
import materialManage from "@/page/buyAndSaleManage/materialManage";
import carManage from "@/page/buyAndSaleManage/carManage";
import goodsManage from "@/page/buyAndSaleManage/goodsManage";
import officeSupplies from "@/page/buyAndSaleManage/officeSupplies";

import carFixLog from "@/page/carFix/carFixLog";
import materialUseLog from "@/page/carFix/materialUseLog";

import carOperation from "@/page/transportationSchedule/carOperation";
import carrierBusiness from "@/page/transportationSchedule/carrierBusiness";

import advertisement from "@/page/cooperation/advertisement";
import communication from "@/page/cooperation/communication";

import common from "@/page/commonUser/common";
import ad from "@/page/commonUser/ad";
import companyInformation from "@/page/commonUser/ad";

import test from "@/page/test"
Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
			path: '/test',
			name: 'test',
			component: ad
		},
		{
			path: '/login',
			name: 'login',
			component: login
		},
		{
			path: '/',
			name: 'home',
			component: home,
			redirect: "/mainPage",
			children: [{
					path: '/mainPage',
					name: 'mainPage',
					component: mainPage,
					meta: {
						title: '??????'
					}
				},
				{
					path: '/basicInfoManage',
					name: 'basicInfoManage',
					component: basic,
					redirect: "/employee",
					meta: {
						title: '????????????'
					},
					children: [{
							path: '/address',
							name: 'address',
							component: address,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/build',
							name: 'build',
							component: build,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/car',
							name: 'car',
							component: car,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/company',
							name: 'company',
							component: company,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/employee',
							name: 'employee',
							component: employee,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/equipment',
							name: 'equipment',
							component: equipment,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/goods',
							name: 'goods',
							component: goods,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/certification',
							name: 'certification',
							component: certification,
							meta: {
								title: '????????????'
							},
						},
						{
							path: '/material',
							name: 'material',
							component: material,
							meta: {
								title: '????????????'
							},
						}
					]
				},
				{
					path: '/buyAndSaleManage',
					name: 'buyAndSaleManage',
					component: basic,
					//redirect: "/officeSupplies",
					meta: {
						title: '????????????'
					},
					children: [{
							path: '/buildManage',
							name: 'buildManage',
							component: buildManage,
							meta: {
								title: '????????????'
							}
						},
						{
							path: '/materialManage',
							name: 'materialManage',
							component: materialManage,
							meta: {
								title: '????????????'
							}
						},
						{
							path: '/carManage',
							name: 'carManage',
							component: carManage,
							meta: {
								title: '????????????'
							}
						},
						{
							path: '/goodsManage',
							name: 'goodsManage',
							component: goodsManage,
							meta: {
								title: '????????????'
							}
						},
						{
							path: '/officeSupplies',
							name: 'officeSupplies',
							component: officeSupplies,
							meta: {
								title: '??????????????????'
							}
						}
					]
				},
				{
					path: '/carFix',
					name: 'carFix',
					component: basic,
					//redirect: "/officeSupplies",
					meta: {
						title: '????????????'
					},
					children: [{
							path: '/carFixLog',
							name: 'carFixLog',
							component: carFixLog,
							meta: {
								title: '??????????????????'
							}
						},
						{
							path: '/materialUseLog',
							name: 'materialUseLog',
							component: materialUseLog,
							meta: {
								title: '??????????????????'
							}
						}
					]
				},
				{
					path: '/transportationSchedule',
					name: 'transportationSchedule',
					component: basic,
					//redirect: "/officeSupplies",
					meta: {
						title: '????????????'
					},
					children: [{
							path: '/carOperation',
							name: 'carOperation',
							component: carOperation,
							meta: {
								title: '??????????????????'
							}
						},
						{
							path: '/carrierBusiness',
							name: 'carrierBusiness',
							component: carrierBusiness,
							meta: {
								title: '?????????????????????'
							}
						}
					]
				},
				{
					path: '/cooperation',
					name: 'cooperation',
					component: basic,
					//redirect: "/officeSupplies",
					meta: {
						title: '????????????'
					},
					children: [{
							path: '/communication',
							name: 'communication',
							component: communication,
							meta: {
								title: '????????????'
							}
						},
						{
							path: '/advertisement',
							name: 'advertisement',
							component: advertisement,
							meta: {
								title: '??????????????????'
							}
						}
					]
				}
			]
		},
		{
			path: '/common',
			name: 'common',	
			component: common,
			children: [{
				path: '/ad',
				name: 'ad',
				component: ad
			},
			{
				path:'aboutUs',
				name:'aboutUs',
				component: companyInformation
			}]
		}
	]
});
