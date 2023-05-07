"use strict";
(self["webpackChunklandrick_angular"] = self["webpackChunklandrick_angular"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/auth-login/auth-login.component */ 6005);
/* harmony import */ var _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth-re-password/auth-re-password.component */ 2369);
/* harmony import */ var _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth/auth-signup/auth-signup.component */ 8094);
/* harmony import */ var _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/account-profile/account-profile.component */ 2016);
/* harmony import */ var _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/components/account-setting/account-setting.component */ 4741);
/* harmony import */ var _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/components/account-works/account-works.component */ 844);
/* harmony import */ var _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/index-blog/index-blog.component */ 7021);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/index/index.component */ 8002);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 9959);
/* harmony import */ var _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/page-aboutus-two/page-aboutus-two.component */ 6507);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 5296);
/* harmony import */ var _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/page-blog-detail-two/page-blog-detail-two.component */ 3380);
/* harmony import */ var _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/page-blog-list/page-blog-list.component */ 6126);
/* harmony import */ var _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./core/components/widget/widget.component */ 2219);
/* harmony import */ var _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email/email-alert/email-alert.component */ 80);
/* harmony import */ var _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email/email-confirmation/email-confirmation.component */ 8942);
/* harmony import */ var _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./email/email-invoice/email-invoice.component */ 9760);
/* harmony import */ var _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./email/email-password-reset/email-password-reset.component */ 4065);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 2157);
/* harmony import */ var _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/components/index-services/index-services.component */ 517);
/* harmony import */ var _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/components/page-contact-one/page-contact-one.component */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);
























const routes = [{
  path: '',
  component: _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_8__.MasterPageComponent,
  children: [{
    path: '',
    component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__.IndexPersonalComponent
  }, {
    path: 'account-profile',
    component: _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_3__.AccountProfileComponent
  }, {
    path: 'account-setting',
    component: _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_4__.AccountSettingComponent
  }, {
    path: 'account-works',
    component: _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_5__.AccountWorksComponent
  }, {
    path: 'index',
    component: _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_7__.IndexPersonalComponent
  }, {
    path: 'index-services',
    component: _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_19__.IndexServicesComponent
  }, {
    path: 'index-blog',
    component: _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_6__.IndexBlogComponent
  }, {
    path: 'page-aboutus',
    component: _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_10__.PageAboutusComponent
  }, {
    path: 'page-aboutus-two',
    component: _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_9__.PageAboutusTwoComponent
  }, {
    path: 'page-blog-list',
    component: _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_12__.PageBlogListComponent
  }, {
    path: 'page-contact-one',
    component: _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_20__.PageContactOneComponent
  }, {
    path: 'widget',
    component: _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_13__.WidgetComponent
  }, {
    path: 'page-blog-detail-two',
    component: _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_11__.PageBlogDetailTwoComponent
  }, {
    path: '#',
    component: _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_18__.SwitcherComponent
  }]
}, {
  path: 'auth-login',
  component: _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_0__.AuthLoginComponent
}, {
  path: 'auth-re-password',
  component: _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_1__.AuthRePasswordComponent
}, {
  path: 'auth-signup',
  component: _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_2__.AuthSignupComponent
}, {
  path: 'email-alert',
  component: _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_14__.EmailAlertComponent
}, {
  path: 'email-confirmation',
  component: _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_15__.EmailConfirmationComponent
}, {
  path: 'email-invoice',
  component: _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_16__.EmailInvoiceComponent
}, {
  path: 'email-password-reset',
  component: _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_17__.EmailPasswordResetComponent
}];
class AppRoutingModule {}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || AppRoutingModule)();
};
AppRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({
  type: AppRoutingModule
});
AppRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule.forRoot(routes, {
    scrollPositionRestoration: "enabled",
    scrollOffset: [0, 0],
    // Enable scrolling to anchors
    anchorScrolling: "enabled"
  }), _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_22__.RouterModule]
  });
})();

/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 2157);




class AppComponent {
  constructor(router) {
    this.router = router;
    this.title = 'landrick-angular';
    /**
     * Unicons icon refreshed on route change.
     */
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        window['Unicons']['refresh']();
      }
      if (!(event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
AppComponent.ɵfac = function AppComponent_Factory(t) {
  return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router));
};
AppComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AppComponent,
  selectors: [["app-root"]],
  decls: 4,
  vars: 0,
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-switcher")(1, "router-outlet")(2, "modal-outlet")(3, "app-carousel");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet, _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_0__.SwitcherComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSw0SkFBNEoiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 5015);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-swiper-wrapper */ 598);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ngx-typed-js */ 7513);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-youtube-player */ 1410);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! angularx-flatpickr */ 1988);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-count-to */ 7321);
/* harmony import */ var ngx_masonry__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ngx-masonry */ 9765);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ 4169);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/login/login.component */ 8146);
/* harmony import */ var _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/registration/registration.component */ 7462);
/* harmony import */ var _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/master-page/master-page.component */ 9959);
/* harmony import */ var _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/account-profile/account-profile.component */ 2016);
/* harmony import */ var _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/account-setting/account-setting.component */ 4741);
/* harmony import */ var _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/auth-login/auth-login.component */ 6005);
/* harmony import */ var _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/auth-re-password/auth-re-password.component */ 2369);
/* harmony import */ var _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/auth-signup/auth-signup.component */ 8094);
/* harmony import */ var _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./email/email-alert/email-alert.component */ 80);
/* harmony import */ var _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./email/email-confirmation/email-confirmation.component */ 8942);
/* harmony import */ var _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./email/email-invoice/email-invoice.component */ 9760);
/* harmony import */ var _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./email/email-password-reset/email-password-reset.component */ 4065);
/* harmony import */ var _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./core/components/index/index.component */ 8002);
/* harmony import */ var _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./core/components/page-aboutus/page-aboutus.component */ 5296);
/* harmony import */ var _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/components/page-aboutus-two/page-aboutus-two.component */ 6507);
/* harmony import */ var _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/components/page-blog-list/page-blog-list.component */ 6126);
/* harmony import */ var _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./core/components/page-blog-detail-two/page-blog-detail-two.component */ 3380);
/* harmony import */ var _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/components/widget/widget.component */ 2219);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var angular_feather_icons__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! angular-feather/icons */ 1744);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);
/* harmony import */ var _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/switcher/switcher.component */ 2157);
/* harmony import */ var _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./core/components/index-blog/index-blog.component */ 7021);
/* harmony import */ var _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./core/components/account-works/account-works.component */ 844);
/* harmony import */ var _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./core/components/index-services/index-services.component */ 517);
/* harmony import */ var _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./core/components/page-contact-one/page-contact-one.component */ 9894);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2560);





















































const DEFAULT_SWIPER_CONFIG = {
  direction: 'horizontal',
  slidesPerView: 'auto'
};
class AppModule {}
AppModule.ɵfac = function AppModule_Factory(t) {
  return new (t || AppModule)();
};
AppModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineNgModule"]({
  type: AppModule,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent]
});
AppModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵdefineInjector"]({
  providers: [{
    provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SWIPER_CONFIG,
    useValue: DEFAULT_SWIPER_CONFIG
  }],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule.pick(angular_feather_icons__WEBPACK_IMPORTED_MODULE_37__.allIcons), _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_38__.ScrollToModule.forRoot(), _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule.forRoot([], {}), ngx_youtube_player__WEBPACK_IMPORTED_MODULE_39__.NgxYoutubePlayerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbDropdownModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_41__.CKEditorModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbNavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SwiperModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_43__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_44__.FlatpickrModule.forRoot(), angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_45__.NgxMasonryModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule, angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_30__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_23__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_24__.FooterComponent, _auth_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent, _auth_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__.RegistrationComponent, _core_components_master_page_master_page_component__WEBPACK_IMPORTED_MODULE_7__.MasterPageComponent, _core_components_account_profile_account_profile_component__WEBPACK_IMPORTED_MODULE_8__.AccountProfileComponent, _core_components_account_setting_account_setting_component__WEBPACK_IMPORTED_MODULE_9__.AccountSettingComponent, _core_components_account_works_account_works_component__WEBPACK_IMPORTED_MODULE_27__.AccountWorksComponent, _auth_auth_login_auth_login_component__WEBPACK_IMPORTED_MODULE_10__.AuthLoginComponent, _auth_auth_re_password_auth_re_password_component__WEBPACK_IMPORTED_MODULE_11__.AuthRePasswordComponent, _auth_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_12__.AuthSignupComponent, _email_email_alert_email_alert_component__WEBPACK_IMPORTED_MODULE_13__.EmailAlertComponent, _email_email_confirmation_email_confirmation_component__WEBPACK_IMPORTED_MODULE_14__.EmailConfirmationComponent, _email_email_invoice_email_invoice_component__WEBPACK_IMPORTED_MODULE_15__.EmailInvoiceComponent, _email_email_password_reset_email_password_reset_component__WEBPACK_IMPORTED_MODULE_16__.EmailPasswordResetComponent, _core_components_index_index_component__WEBPACK_IMPORTED_MODULE_17__.IndexPersonalComponent, _core_components_index_services_index_services_component__WEBPACK_IMPORTED_MODULE_28__.IndexServicesComponent, _core_components_index_blog_index_blog_component__WEBPACK_IMPORTED_MODULE_26__.IndexBlogComponent, _core_components_page_aboutus_page_aboutus_component__WEBPACK_IMPORTED_MODULE_18__.PageAboutusComponent, _core_components_page_aboutus_two_page_aboutus_two_component__WEBPACK_IMPORTED_MODULE_19__.PageAboutusTwoComponent, _core_components_page_blog_list_page_blog_list_component__WEBPACK_IMPORTED_MODULE_20__.PageBlogListComponent, _core_components_page_blog_detail_two_page_blog_detail_two_component__WEBPACK_IMPORTED_MODULE_21__.PageBlogDetailTwoComponent, _core_components_page_contact_one_page_contact_one_component__WEBPACK_IMPORTED_MODULE_29__.PageContactOneComponent, _core_components_widget_widget_component__WEBPACK_IMPORTED_MODULE_22__.WidgetComponent, _shared_switcher_switcher_component__WEBPACK_IMPORTED_MODULE_25__.SwitcherComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_32__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_33__.BrowserAnimationsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_35__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_38__.ScrollToModule, _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_39__.NgxYoutubePlayerModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbDropdownModule, _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_41__.CKEditorModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_40__.NgbNavModule, _angular_forms__WEBPACK_IMPORTED_MODULE_42__.FormsModule, ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_31__.SwiperModule, ngx_typed_js__WEBPACK_IMPORTED_MODULE_43__.NgxTypedJsModule, angularx_flatpickr__WEBPACK_IMPORTED_MODULE_44__.FlatpickrModule, angular_count_to__WEBPACK_IMPORTED_MODULE_3__.CountToModule, ngx_masonry__WEBPACK_IMPORTED_MODULE_45__.NgxMasonryModule, ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.LightboxModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule],
    exports: [angular_feather__WEBPACK_IMPORTED_MODULE_36__.FeatherModule]
  });
})();

/***/ }),

/***/ 6005:
/*!*********************************************************!*\
  !*** ./src/app/auth/auth-login/auth-login.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLoginComponent": () => (/* binding */ AuthLoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth Login Component
 */
class AuthLoginComponent {
  constructor() {}
  ngOnInit() {}
}
AuthLoginComponent.ɵfac = function AuthLoginComponent_Factory(t) {
  return new (t || AuthLoginComponent)();
};
AuthLoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthLoginComponent,
  selectors: [["app-auth-login"]],
  decls: 68,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/login.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "login-page", "bg-white", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "d-flex", "justify-content-between"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], [1, "forgot-pass", "mb-0"], ["routerLink", "/auth-re-password", 1, "text-dark", "fw-bold"], [1, "col-lg-12", "mb-0"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "col-12", "text-center"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-signup", 1, "text-dark", "fw-bold"]],
  template: function AuthLoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20)(24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i-feather", 22)(33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15)(35, "div", 24)(36, "div", 16)(37, "div", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Remember me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 28)(42, "a", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Forgot password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 30)(45, "div", 31)(46, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 33)(49, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Or Login With");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14)(52, "div", 34)(53, "div", 31)(54, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 34)(58, "div", 31)(59, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 38)(63, "p", 39)(64, "small", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Don't have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Sign Up");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWxvZ2luLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLWxvZ2luL2F1dGgtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2369:
/*!*********************************************************************!*\
  !*** ./src/app/auth/auth-re-password/auth-re-password.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRePasswordComponent": () => (/* binding */ AuthRePasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth RePassword Component
 */
class AuthRePasswordComponent {
  constructor() {}
  ngOnInit() {}
}
AuthRePasswordComponent.ɵfac = function AuthRePasswordComponent_Factory(t) {
  return new (t || AuthRePasswordComponent)();
};
AuthRePasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthRePasswordComponent,
  selectors: [["app-auth-re-password"]],
  decls: 37,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-home", "d-flex", "align-items-center"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/recovery.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-lg-12"], [1, "text-muted"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Enter Your Email Address", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]],
  template: function AuthRePasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Recover Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "p", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Please enter your email address. You will receive a link to create a new password via email.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 17)(20, "label", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Email address ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i-feather", 21)(26, "input", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15)(28, "div", 23)(29, "button", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 25)(32, "p", 26)(33, "small", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Remember your password ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXJlLXBhc3N3b3JkLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLXJlLXBhc3N3b3JkL2F1dGgtcmUtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0xBQWdMIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8094:
/*!***********************************************************!*\
  !*** ./src/app/auth/auth-signup/auth-signup.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthSignupComponent": () => (/* binding */ AuthSignupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);




/**
 * Auth Signup Component
 */
class AuthSignupComponent {
  constructor() {}
  ngOnInit() {}
}
AuthSignupComponent.ɵfac = function AuthSignupComponent_Factory(t) {
  return new (t || AuthSignupComponent)();
};
AuthSignupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AuthSignupComponent,
  selectors: [["app-auth-signup"]],
  decls: 84,
  vars: 0,
  consts: [[1, "back-to-home", "rounded", "d-none", "d-sm-block"], ["routerLink", "/index", 1, "btn", "btn-icon", "btn-soft-primary"], ["name", "home", 1, "icons"], [1, "bg-auth-home", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-6"], [1, "me-lg-5"], ["src", "assets/images/user/signup.svg", "alt", "", 1, "img-fluid", "d-block", "mx-auto"], [1, "col-lg-5", "col-md-6"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body"], [1, "card-title", "text-center"], [1, "login-form", "mt-4"], [1, "row"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "First Name", "name", "s", "required", "", 1, "form-control", "ps-5"], ["name", "user-check", 1, "fea", "icon-sm", "icons"], ["type", "text", "placeholder", "Last Name", "name", "s", "required", "", 1, "form-control", "ps-5"], [1, "col-md-12"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Password", "required", "", 1, "form-control", "ps-5"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "flexCheckDefault", 1, "form-check-input"], ["for", "flexCheckDefault", 1, "form-check-label"], ["routerLink", "/auth-signup", 1, "text-primary"], [1, "d-grid"], [1, "btn", "btn-primary"], [1, "col-lg-12", "mt-4", "text-center"], [1, "col-6", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "btn-light"], [1, "mdi", "mdi-facebook", "text-primary"], [1, "mdi", "mdi-google", "text-danger"], [1, "mx-auto"], [1, "mb-0", "mt-3"], [1, "text-dark", "me-2"], ["routerLink", "/auth-login", 1, "text-dark", "fw-bold"]],
  template: function AuthSignupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "a", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i-feather", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Signup");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form", 13)(15, "div", 14)(16, "div", 15)(17, "div", 16)(18, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "First name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20)(24, "input", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15)(26, "div", 16)(27, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Last name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i-feather", 22)(33, "input", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 24)(35, "div", 16)(36, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i-feather", 25)(42, "input", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 24)(44, "div", 16)(45, "label", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Password ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i-feather", 27)(51, "input", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 24)(53, "div", 16)(54, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "I Accept ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Terms And Condition");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 24)(61, "div", 33)(62, "button", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Register");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35)(65, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Or Signup With");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 14)(68, "div", 36)(69, "div", 33)(70, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "i", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Facebook");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36)(74, "div", 33)(75, "a", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Google");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 40)(79, "p", 41)(80, "small", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Already have an account ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Sign in");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLXNpZ251cC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9hdXRoLXNpZ251cC9hdXRoLXNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoginComponent {
  constructor() {}
  ngOnInit() {}
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) {
  return new (t || LoginComponent)();
};
LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: LoginComponent,
  selectors: [["app-login"]],
  decls: 0,
  vars: 0,
  template: function LoginComponent_Template(rf, ctx) {},
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7462:
/*!*************************************************************!*\
  !*** ./src/app/auth/registration/registration.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegistrationComponent": () => (/* binding */ RegistrationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RegistrationComponent {
  constructor() {}
  ngOnInit() {}
}
RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
  return new (t || RegistrationComponent)();
};
RegistrationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: RegistrationComponent,
  selectors: [["app-registration"]],
  decls: 2,
  vars: 0,
  template: function RegistrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "registration works!");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3RyYXRpb24uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXV0aC9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2016:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/account-profile/account-profile.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountProfileComponent": () => (/* binding */ AccountProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);




/**
 * Account Profile Component
 */
class AccountProfileComponent {
  constructor() {
    /**
     * nav light class add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
AccountProfileComponent.ɵfac = function AccountProfileComponent_Factory(t) {
  return new (t || AccountProfileComponent)();
};
AccountProfileComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccountProfileComponent,
  selectors: [["app-account-profile"]],
  decls: 318,
  vars: 1,
  consts: [["id", "home", 1, "bg-profile", "d-table", "w-100", "bg-primary", 2, "background", "url('assets/images/account/bg.png') center center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "public-profile", "border-0", "rounded", "shadow", 2, "z-index", "1"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-md-3", "text-md-start", "text-center"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "avatar-large", "rounded-circle", "shadow", "d-block", "mx-auto"], [1, "col-lg-10", "col-md-9"], [1, "row", "align-items-end"], [1, "col-md-7", "text-md-start", "text-center", "mt-4", "mt-sm-0"], [1, "title", "mb-0"], [1, "text-muted", "h6", "me-2"], [1, "list-inline", "mb-0", "mt-3"], [1, "list-inline-item", "me-2"], ["href", "javascript:void(0)", "title", "Instagram", 1, "text-muted"], ["name", "instagram", 1, "fea", "icon-sm", "me-2"], [1, "list-inline-item"], ["href", "javascript:void(0)", "title", "Linkedin", 1, "text-muted"], ["name", "linkedin", 1, "fea", "icon-sm", "me-2"], [1, "col-md-5", "text-md-end", "text-center"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Add Friend", 1, "rounded"], [1, "uil", "uil-user-plus", "align-middle"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Messages", 1, "rounded"], [1, "uil", "uil-comment", "align-middle"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Notifications", 1, "rounded"], [1, "uil", "uil-bell", "align-middle"], ["routerLink", "/account-setting", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Settings", 1, "rounded"], [1, "uil", "uil-cog", "align-middle"], [1, "section", "mt-60"], [1, "container", "mt-lg-3"], [1, "col-lg-4", "col-md-6", "col-12", "d-lg-block", "d-none"], [1, "sidebar", "sticky-bar", "p-4", "rounded", "shadow"], [1, "widget"], [1, "widget-title"], [1, "row", "mt-4"], [1, "col-6", "text-center"], ["name", "user-plus", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "mb-0"], [1, "text-muted", "mb-0"], ["name", "users", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "widget", "mt-4", "pt-2"], [1, "progress-box", "mt-4"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "50%"], [1, "progress-value", "d-block", "text-muted", "h6"], [1, "widget", "mt-4"], ["id", "navmenu-nav", 1, "list-unstyled", "sidebar-nav", "mb-0"], [1, "navbar-item", "account-menu", "px-0", "active"], ["routerLink", "/account-profile", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "h4", "mb-0"], [1, "uil", "uil-dashboard"], [1, "mb-0", "ms-2"], [1, "navbar-item", "account-menu", "px-0", "mt-2"], ["routerLink", "/account-members", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-users-alt"], ["routerLink", "/account-works", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-file"], ["routerLink", "/account-messages", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-envelope-star"], ["routerLink", "/account-payments", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-transaction"], ["routerLink", "/account-setting", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-setting"], ["routerLink", "/auth-login-three", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-8", "col-12"], [1, "border-bottom", "pb-4"], [1, "col-md-6", "mt-4"], [1, "mt-4"], [1, "d-flex", "align-items-center"], ["name", "mail", 1, "fea", "icon-ex-md", "text-muted", "me-3"], [1, "flex-1"], [1, "text-primary", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "d-flex", "align-items-center", "mt-3"], ["name", "bookmark", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "italic", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "globe", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "gift", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "map-pin", 1, "fea", "icon-ex-md", "text-muted", "me-3"], ["name", "phone", 1, "fea", "icon-ex-md", "text-muted", "me-3"], [1, "col-md-6", "mt-4", "pt-2", "pt-sm-0"], [1, "d-flex", "key-feature", "align-items-center", "p-3", "rounded", "shadow", "mt-4"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "flex-1", "content", "ms-3"], ["href", "javascript:void(0)", 1, "text-primary"], ["src", "assets/images/job/Codepen.svg", "alt", "", 1, "avatar", "avatar-ex-sm"], ["src", "assets/images/job/Gitlab.svg", "alt", "", 1, "avatar", "avatar-ex-sm"], [1, "mt-4", "mb-0"], [1, "col-md-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], [1, "position-relative"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], ["src", "assets/images/blog/02.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "col-12", "mt-4", "pt-2"], ["routerLink", "/page-blog-grid", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function AccountProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "krista_joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 18)(22, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Krista Joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21)(26, "ul", 22)(27, "li", 18)(28, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 25)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 25)(37, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 32)(40, "div", 33)(41, "div", 2)(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Followers :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 38)(48, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2588");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i-feather", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44)(61, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Projects :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 45)(64, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47)(67, "div", 48)(68, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "24 / 48");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 50)(71, "ul", 51)(72, "li", 52)(73, "a", 53)(74, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 57)(79, "a", 58)(80, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 57)(85, "a", 60)(86, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 57)(91, "a", 62)(92, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 57)(97, "a", 64)(98, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 57)(103, "a", 66)(104, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 57)(109, "a", 68)(110, "span", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44)(115, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Follow me :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 69)(118, "li", 18)(119, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i-feather", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 25)(122, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i-feather", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 25)(125, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i-feather", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 25)(128, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i-feather", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 25)(131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 25)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i-feather", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 25)(137, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i-feather", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 78)(140, "div", 79)(141, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 79)(146, "div", 2)(147, "div", 80)(148, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Personal Details :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 81)(151, "div", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i-feather", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 84)(154, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](155, "Email :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "kristajoseph0203@mail.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "i-feather", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 84)(161, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Skills :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "html");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, "css");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "js");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "mysql");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "i-feather", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 84)(177, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, "Language :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, "English");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "Japanese");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, ", ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Chinese");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "i-feather", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 84)(190, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Website :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "www.kristajoseph.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "i-feather", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 84)(197, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Birthday :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "2nd March, 1996");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i-feather", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 84)(204, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](205, "Location :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Beijing, China");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i-feather", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 84)(211, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212, "Cell No :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "a", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "(+12) 1254-56-4896");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "div", 94)(216, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "Experience :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "img", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 97)(221, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Senior Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, "3 Years Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "p", 42)(226, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "CircleCi");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](228, " @London, UK ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](230, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "div", 97)(232, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "Web Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "2 Years Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "p", 42)(237, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Codepen");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, " @Washington D.C, USA");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "img", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 97)(243, "h4", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "UI Designer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "2 Years Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "p", 42)(248, "a", 98);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](249, "Gitlab");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " @Perth, Australia");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h5", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Posts & News :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 2)(254, "div", 102)(255, "div", 103)(256, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "img", 105)(258, "div", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "div", 107)(260, "h5")(261, "a", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 109)(264, "ul", 110)(265, "li", 111)(266, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "i", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "li", 18)(270, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](271, "i", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 118)(277, "small", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](278, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "small", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 102)(284, "div", 103)(285, "div", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](286, "img", 123)(287, "div", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "div", 107)(289, "h5")(290, "a", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "How apps is changing the IT world");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 109)(293, "ul", 110)(294, "li", 111)(295, "a", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "i", 113);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "li", 18)(299, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](300, "i", 115);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](301, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](302, "a", 116);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](303, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](304, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 118)(306, "small", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](307, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "small", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](310, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 124)(313, "a", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](314, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](315, "i", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "a", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](317, "i-feather", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](316);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2FjY291bnQtcHJvZmlsZS9hY2NvdW50LXByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 4741:
/*!******************************************************************************!*\
  !*** ./src/app/core/components/account-setting/account-setting.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountSettingComponent": () => (/* binding */ AccountSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





/**
 * Account Setting Component
 */
class AccountSettingComponent {
  constructor() {
    /**
     * Nav Light Class Add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
AccountSettingComponent.ɵfac = function AccountSettingComponent_Factory(t) {
  return new (t || AccountSettingComponent)();
};
AccountSettingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccountSettingComponent,
  selectors: [["app-account-setting"]],
  decls: 313,
  vars: 1,
  consts: [[1, "bg-profile", "d-table", "w-100", "bg-primary", 2, "background", "url('assets/images/account/bg.png') center center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "public-profile", "border-0", "rounded", "shadow", 2, "z-index", "1"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-md-3", "text-md-start", "text-center"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "avatar-large", "rounded-circle", "shadow", "d-block", "mx-auto"], [1, "col-lg-10", "col-md-9"], [1, "row", "align-items-end"], [1, "col-md-7", "text-md-start", "text-center", "mt-4", "mt-sm-0"], [1, "title", "mb-0"], [1, "text-muted", "h6", "me-2"], [1, "list-inline", "mb-0", "mt-3"], [1, "list-inline-item", "me-2"], ["href", "javascript:void(0)", "title", "Instagram", 1, "text-muted"], ["name", "instagram", 1, "fea", "icon-sm", "me-2"], [1, "list-inline-item"], ["href", "javascript:void(0)", "title", "Linkedin", 1, "text-muted"], ["name", "linkedin", 1, "fea", "icon-sm", "me-2"], [1, "col-md-5", "text-md-end", "text-center"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Add Friend", 1, "rounded"], [1, "uil", "uil-user-plus", "align-middle"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Messages", 1, "rounded"], [1, "uil", "uil-comment", "align-middle"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Notifications", 1, "rounded"], [1, "uil", "uil-bell", "align-middle"], ["routerLink", "/account-setting", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Settings", 1, "rounded"], [1, "uil", "uil-cog", "align-middle"], [1, "section", "mt-60"], [1, "container", "mt-lg-3"], [1, "col-lg-4", "col-md-6", "col-12", "d-lg-block", "d-none"], [1, "sidebar", "sticky-bar", "p-4", "rounded", "shadow"], [1, "widget"], [1, "widget-title"], [1, "row", "mt-4"], [1, "col-6", "text-center"], ["name", "user-plus", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "mb-0"], [1, "text-muted", "mb-0"], ["name", "users", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "widget", "mt-4", "pt-2"], [1, "progress-box", "mt-4"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "50%"], [1, "progress-value", "d-block", "text-muted", "h6"], ["id", "navmenu-nav", 1, "list-unstyled", "sidebar-nav", "mb-0"], [1, "navbar-item", "account-menu", "px-0"], ["routerLink", "/account-profile", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "h4", "mb-0"], [1, "uil", "uil-dashboard"], [1, "mb-0", "ms-2"], [1, "navbar-item", "account-menu", "px-0", "mt-2"], ["routerLink", "/account-members", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-users-alt"], ["routerLink", "/account-works", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-file"], ["routerLink", "/account-messages", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-envelope-star"], ["routerLink", "/account-payments", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-transaction"], [1, "navbar-item", "account-menu", "px-0", "mt-2", "active"], ["routerLink", "/account-setting", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-setting"], ["routerLink", "/auth-login-three", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-8", "col-12"], [1, "card", "border-0", "rounded", "shadow"], [1, "text-md-start", "text-center"], [1, "mt-3", "text-md-start", "text-center", "d-sm-flex"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "float-md-left", "avatar-medium", "rounded-circle", "shadow", "me-md-4"], [1, "mt-md-4", "mt-3", "mt-sm-0"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2", "ms-2"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "first", "type", "text", "placeholder", "First Name :", 1, "form-control", "ps-5"], ["name", "user-check", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "last", "type", "text", "placeholder", "Last Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Your email :", 1, "form-control", "ps-5"], ["name", "bookmark", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "occupation", "type", "text", "placeholder", "Occupation :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Description :", 1, "form-control", "ps-5"], [1, "col-sm-12"], ["type", "submit", "id", "submit", "name", "send", "value", "Save Changes", 1, "btn", "btn-primary"], [1, "col-md-6", "mt-4", "pt-2"], ["name", "phone", 1, "fea", "icon-sm", "icons"], ["name", "number", "id", "number", "type", "number", "placeholder", "Phone :", 1, "form-control", "ps-5"], ["name", "globe", 1, "fea", "icon-sm", "icons"], ["name", "url", "id", "url", "type", "url", "placeholder", "Url :", 1, "form-control", "ps-5"], [1, "col-lg-12", "mt-2", "mb-0"], [1, "btn", "btn-primary"], ["name", "key", 1, "fea", "icon-sm", "icons"], ["type", "password", "placeholder", "Old password", "required", "", 1, "form-control", "ps-5"], ["type", "password", "placeholder", "New password", "required", "", 1, "form-control", "ps-5"], ["type", "password", "placeholder", "Re-type New password", "required", "", 1, "form-control", "ps-5"], [1, "rounded", "shadow", "mt-4"], [1, "p-4", "border-bottom"], [1, "p-4"], [1, "d-flex", "justify-content-between", "pb-4"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "noti1", 1, "form-check-input"], ["for", "noti1", 1, "form-check-label"], [1, "d-flex", "justify-content-between", "py-4", "border-top"], ["type", "checkbox", "value", "", "checked", "", "id", "noti2", 1, "form-check-input"], ["for", "noti2", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti3", 1, "form-check-input"], ["for", "noti3", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti4", 1, "form-check-input"], ["for", "noti4", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti5", 1, "form-check-input"], ["for", "noti5", 1, "form-check-label"], ["type", "checkbox", "value", "", "id", "noti6", 1, "form-check-input"], ["for", "noti6", 1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", "id", "noti7", 1, "form-check-input"], ["for", "noti7", 1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", "id", "noti8", 1, "form-check-input"], ["for", "noti8", 1, "form-check-label"], [1, "mb-0", "text-danger"], [1, "mt-4"], [1, "btn", "btn-danger"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function AccountSettingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "krista_joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 18)(22, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Krista Joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21)(26, "ul", 22)(27, "li", 18)(28, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 25)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 25)(37, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 32)(40, "div", 33)(41, "div", 2)(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Followers :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 38)(48, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2588");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i-feather", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44)(61, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Projects :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 45)(64, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47)(67, "div", 48)(68, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "24 / 48");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36)(71, "ul", 50)(72, "li", 51)(73, "a", 52)(74, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 56)(79, "a", 57)(80, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 56)(85, "a", 59)(86, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 56)(91, "a", 61)(92, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 56)(97, "a", 63)(98, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 65)(103, "a", 66)(104, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 56)(109, "a", 68)(110, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44)(115, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Follow me :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 69)(118, "li", 18)(119, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i-feather", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 25)(122, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i-feather", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 25)(125, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i-feather", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 25)(128, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i-feather", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 25)(131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 25)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i-feather", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 25)(137, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i-feather", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 78)(140, "div", 79)(141, "div", 5)(142, "h5", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "Personal Detail :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 83)(147, "a", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Change Picture");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "a", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "Delete");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "form")(152, "div", 38)(153, "div", 86)(154, "div", 87)(155, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "First Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "i-feather", 90)(159, "input", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 86)(161, "div", 87)(162, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "Last Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i-feather", 92)(166, "input", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 86)(168, "div", 87)(169, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, "Your Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "i-feather", 94)(173, "input", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 86)(175, "div", 87)(176, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Occupation");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i-feather", 96)(180, "input", 97);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 3)(182, "div", 87)(183, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, "Description");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "i-feather", 98)(187, "textarea", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 2)(189, "div", 100);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "input", 101);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 2)(192, "div", 102)(193, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, "Contact Info :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "form")(196, "div", 38)(197, "div", 3)(198, "div", 87)(199, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, "Phone No. :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "i-feather", 103)(203, "input", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](204, "div", 3)(205, "div", 87)(206, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Website :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i-feather", 105)(210, "input", 106);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 107)(212, "button", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Add");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 102)(215, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "Change password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "form")(218, "div", 38)(219, "div", 3)(220, "div", 87)(221, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, "Old password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](224, "i-feather", 109)(225, "input", 110);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "div", 3)(227, "div", 87)(228, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "New password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "i-feather", 109)(232, "input", 111);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](233, "div", 3)(234, "div", 87)(235, "label", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, "Re-type New password :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "div", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](238, "i-feather", 109)(239, "input", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "div", 107)(241, "button", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](242, "Save password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 113)(244, "div", 114)(245, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "Account Notifications :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 115)(248, "div", 116)(249, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, "When someone mentions me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](252, "input", 118)(253, "label", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 120)(255, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, "When someone follows me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "input", 121)(259, "label", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 120)(261, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, "When shares my activity");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](264, "input", 123)(265, "label", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 120)(267, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](268, "When someone messages me");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "input", 125)(271, "label", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "div", 113)(273, "div", 114)(274, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Marketing Notifications :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 115)(277, "div", 116)(278, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "There is a sale or promotion");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](280, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "input", 127)(282, "label", 128);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 120)(284, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](285, "Company news");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](287, "input", 129)(288, "label", 130);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 120)(290, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](291, "Weekly jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](293, "input", 131)(294, "label", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 120)(296, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Unsubscribe News");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "div", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "input", 133)(300, "label", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 113)(302, "div", 114)(303, "h5", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Delete Account :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div", 115)(306, "h6", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Do you want to delete the account? Please press below \"Delete\" button");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "div", 136)(309, "button", 137);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "Delete Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "a", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](312, "i-feather", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](311);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXNldHRpbmcuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2FjY291bnQtc2V0dGluZy9hY2NvdW50LXNldHRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsNEtBQTRLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 844:
/*!**************************************************************************!*\
  !*** ./src/app/core/components/account-works/account-works.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountWorksComponent": () => (/* binding */ AccountWorksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);





function AccountWorksComponent_div_144_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84)(1, "div", 85)(2, "div", 86)(3, "a", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 89)(6, "h5", 41)(7, "a", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h6", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.designation);
  }
}
;
/**
 * Account Works Component
 */
class AccountWorksComponent {
  constructor() {
    /**
     * Member Data
     */
    this.worksData = [{
      image: "assets/images/work/1.jpg",
      name: "Iphone mockup",
      designation: "Branding"
    }, {
      image: "assets/images/work/2.jpg",
      name: "Mockup Collection",
      designation: "Mockup"
    }, {
      image: "assets/images/work/3.jpg",
      name: "Abstract images",
      designation: "Abstract"
    }, {
      image: "assets/images/work/4.jpg",
      name: "Yellow bg with Books",
      designation: "Books"
    }, {
      image: "assets/images/work/5.jpg",
      name: "Company V-card",
      designation: "V-card"
    }, {
      image: "assets/images/work/6.jpg",
      name: "Mockup box with paints",
      designation: "Photography"
    }, {
      image: "assets/images/work/7.jpg",
      name: "Coffee cup",
      designation: "Cups"
    }, {
      image: "assets/images/work/8.jpg",
      name: "Pen and article",
      designation: "Article"
    }, {
      image: "assets/images/work/9.jpg",
      name: "White mockup box",
      designation: "Color"
    }, {
      image: "assets/images/work/10.jpg",
      name: "Logo Vectors",
      designation: "Logos"
    }, {
      image: "assets/images/work/11.jpg",
      name: "Black and white T-shirt",
      designation: "Clothes"
    }, {
      image: "assets/images/work/12.jpg",
      name: "Yellow bg with cellphone",
      designation: "Cellphone"
    }];
    /**
     * nav light class add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
AccountWorksComponent.ɵfac = function AccountWorksComponent_Factory(t) {
  return new (t || AccountWorksComponent)();
};
AccountWorksComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: AccountWorksComponent,
  selectors: [["app-account-works"]],
  decls: 147,
  vars: 2,
  consts: [["id", "home", 1, "bg-profile", "d-table", "w-100", "bg-primary", 2, "background", "url('assets/images/account/bg.png') center center"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "card", "public-profile", "border-0", "rounded", "shadow", 2, "z-index", "1"], [1, "card-body"], [1, "row", "align-items-center"], [1, "col-lg-2", "col-md-3", "text-md-start", "text-center"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "avatar", "avatar-large", "rounded-circle", "shadow", "d-block", "mx-auto"], [1, "col-lg-10", "col-md-9"], [1, "row", "align-items-end"], [1, "col-md-7", "text-md-start", "text-center", "mt-4", "mt-sm-0"], [1, "title", "mb-0"], [1, "text-muted", "h6", "me-2"], [1, "list-inline", "mb-0", "mt-3"], [1, "list-inline-item", "me-2"], ["href", "javascript:void(0)", "title", "Instagram", 1, "text-muted"], ["name", "instagram", 1, "fea", "icon-sm", "me-2"], [1, "list-inline-item"], ["href", "javascript:void(0)", "title", "Linkedin", 1, "text-muted"], ["name", "linkedin", 1, "fea", "icon-sm", "me-2"], [1, "col-md-5", "text-md-end", "text-center"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Add Friend", 1, "rounded"], [1, "uil", "uil-user-plus", "align-middle"], [1, "list-inline-item", "ms-1"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Messages", 1, "rounded"], [1, "uil", "uil-comment", "align-middle"], ["href", "javascript:void(0)", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Notifications", 1, "rounded"], [1, "uil", "uil-bell", "align-middle"], ["routerLink", "/account-setting", "data-bs-toggle", "tooltip", "data-bs-placement", "bottom", "title", "Settings", 1, "rounded"], [1, "uil", "uil-cog", "align-middle"], [1, "section", "mt-60"], [1, "container", "mt-lg-3"], [1, "col-lg-4", "col-md-6", "col-12", "d-lg-block", "d-none"], [1, "sidebar", "sticky-bar", "p-4", "rounded", "shadow"], [1, "widget"], [1, "widget-title"], [1, "row", "mt-4"], [1, "col-6", "text-center"], ["name", "user-plus", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "mb-0"], [1, "text-muted", "mb-0"], ["name", "users", 1, "fea", "icon-ex-md", "text-primary", "mb-1"], [1, "widget", "mt-4", "pt-2"], [1, "progress-box", "mt-4"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "50%"], [1, "progress-value", "d-block", "text-muted", "h6"], ["id", "navmenu-nav", 1, "list-unstyled", "sidebar-nav", "mb-0"], [1, "navbar-item", "account-menu", "px-0"], ["routerLink", "/account-profile", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "h4", "mb-0"], [1, "uil", "uil-dashboard"], [1, "mb-0", "ms-2"], [1, "navbar-item", "account-menu", "px-0", "mt-2"], ["routerLink", "/account-members", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-users-alt"], [1, "navbar-item", "account-menu", "px-0", "mt-2", "active"], ["routerLink", "/account-works", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-file"], ["routerLink", "/account-messages", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-envelope-star"], ["routerLink", "/account-payments", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-transaction"], ["routerLink", "/account-setting", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "uil", "uil-setting"], ["routerLink", "/auth-login-three", 1, "navbar-link", "d-flex", "rounded", "shadow", "align-items-center", "py-2", "px-4"], [1, "list-unstyled", "social-icon", "mb-0", "mt-4"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["name", "youtube", 1, "fea", "icon-sm", "fea-social"], ["name", "gitlab", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-8", "col-12"], [1, "rounded", "shadow", "p-4"], [1, "row", "projects-wrapper"], ["class", "col-md-6 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-classic"], [1, "card-body", "p-0"], ["routerLink", "/portfolio-detail-one"], ["alt", "", 1, "img-fluid", "rounded", "work-image", 3, "src"], [1, "content", "pt-3"], ["routerLink", "/portfolio-detail-one", 1, "text-dark", "title"], [1, "text-muted", "tag", "mb-0"]],
  template: function AccountWorksComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "div", 10)(11, "div", 11)(12, "h3", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Krista Joseph");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "small", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Web Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 14)(17, "li", 15)(18, "a", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i-feather", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "krista_joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 18)(22, "a", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i-feather", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Krista Joseph ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 21)(26, "ul", 22)(27, "li", 18)(28, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 25)(31, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 25)(34, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "li", 25)(37, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 32)(40, "div", 33)(41, "div", 2)(42, "div", 34)(43, "div", 35)(44, "div", 36)(45, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Followers :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 38)(48, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i-feather", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "2588");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Followers");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i-feather", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "454");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Following");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44)(61, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Projects :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 45)(64, "h6", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Progress");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 47)(67, "div", 48)(68, "div", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "24 / 48");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 36)(71, "ul", 50)(72, "li", 51)(73, "a", 52)(74, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Profile");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li", 56)(79, "a", 57)(80, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Members");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li", 59)(85, "a", 60)(86, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "li", 56)(91, "a", 62)(92, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "i", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Messages");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li", 56)(97, "a", 64)(98, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "i", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Payments");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li", 56)(103, "a", 66)(104, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "i", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "li", 56)(109, "a", 68)(110, "span", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "h6", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "Logout");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 44)(115, "h5", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Follow me :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "ul", 69)(118, "li", 18)(119, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i-feather", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "li", 25)(122, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i-feather", 72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "li", 25)(125, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "i-feather", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "li", 25)(128, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i-feather", 74);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "li", 25)(131, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "li", 25)(134, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i-feather", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "li", 25)(137, "a", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](138, "i-feather", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 78)(140, "div", 79)(141, "h5", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Works & Projects: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "div", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](144, AccountWorksComponent_div_144_Template, 11, 3, "div", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "a", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](146, "i-feather", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](144);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.worksData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LXdvcmtzLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2FjY291bnQtd29ya3MvYWNjb3VudC13b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSw0S0FBNEsiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7021:
/*!********************************************************************!*\
  !*** ./src/app/core/components/index-blog/index-blog.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexBlogComponent": () => (/* binding */ IndexBlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 2891);






function IndexBlogComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h2", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Weekend Travel");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
}
function IndexBlogComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Business Meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
}
function IndexBlogComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "div", 8)(4, "div", 32)(5, "div", 41)(6, "h1", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Delicious & Organic");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul", 43)(9, "li", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Calvin Carlo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 13th August, 2019");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 49)(18, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
  }
}
/***
 * Blog Component
 */
class IndexBlogComponent {
  constructor() {
    /***
     * Nav bg light calss Add
     */
    this.navClass = 'bg-white';
    /***
     * Main Slider navigation Add
     */
    this.showNavigationArrows = true;
    this.showNavigationIndicators = false;
    /**
     * Blog Data
     */
    this.blogData = [{
      image: "assets/images/blog/01.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/02.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/03.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
    /**
     * Resent Post Data
     */
    this.resentPostData = [{
      image: "assets/images/blog/04.jpg",
      title: "How apps is changing the IT world",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/05.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/blog/06.jpg",
      title: "Smartest Applications for Business",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
  }
  ngOnInit() {}
}
IndexBlogComponent.ɵfac = function IndexBlogComponent_Factory(t) {
  return new (t || IndexBlogComponent)();
};
IndexBlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: IndexBlogComponent,
  selectors: [["app-index-blog"]],
  decls: 85,
  vars: 7,
  consts: [["id", "home", 1, "main-slider"], [1, "slides", 3, "showNavigationArrows", "showNavigationIndicators"], ["ngbSlide", ""], [1, "section"], [1, "container"], [1, "row"], [1, "col-lg-12"], [1, "features-absolute", "blog-search"], [1, "row", "justify-content-center"], [1, "col-md-10"], [1, "text-center", "subcribe-form"], [2, "max-width", "800px"], ["type", "text", "id", "course", "name", "name", "placeholder", "Search keywords...", 1, "rounded-pill", "shadow-md", "bg-white"], ["type", "submit", 1, "btn", "btn-pills", "btn-primary"], [1, "container", "mt-4", "mt-lg-0"], [1, "row", "align-items-center", "mb-4", "pb-4"], [1, "col-md-8"], [1, "section-title", "text-md-left"], [1, "mb-4"], [1, "text-muted", "mb-0", "para-desc"], [1, "text-primary", "fw-bold"], [1, "col-md-4", "mt-4", "mt-sm-0"], [1, "text-center", "text-md-end"], ["href", "javascript:void(0)", 1, "btn", "btn-soft-primary"], ["name", "arrow-right", 1, "fea", "icon-sm"], [3, "blogData"], [1, "container", "mt-100", "mt-60"], ["name", "arrow-right", 1, "icons"], [1, "container-fluid", "mt-100", "mt-60"], [1, "rounded-md", "shadow-md", "py-5", "position-relative", 2, "background", "url('assets/images/3.jpg') center center"], [1, "bg-overlay", "rounded-md"], [1, "container", "py-5"], [1, "col-12"], [1, "section-title", "text-center"], [1, "fw-bold", "text-white", "title-dark", "mb-4", "pb-2"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "col-12", "mt-4", "pt-2"], [1, "text-center"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg1.jpg') center center"], [1, "title-heading", "text-center"], [1, "text-white", "title-dark", "mb-3"], [1, "list-unstyled"], [1, "list-inline-item", "small", "user", "text-white-50", "me-2"], [1, "uil", "uil-user", "text-white", "title-dark"], [1, "list-inline-item", "small", "date", "text-white-50"], [1, "uil", "uil-calendar-alt", "text-white", "title-dark"], [1, "para-desc", "mx-auto", "text-white-50", "mb-0"], [1, "mt-4"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg2.jpg') center center"], [1, "mdi", "mdi-account", "text-white", "title-dark"], [1, "mdi", "mdi-calendar-check", "text-white", "title-dark"], [1, "bg-half-170", "rounded-md", 2, "background", "url('assets/images/blog/bg3.jpg') center center"]],
  template: function IndexBlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "ngb-carousel", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, IndexBlogComponent_ng_template_2_Template, 20, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, IndexBlogComponent_ng_template_3_Template, 20, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, IndexBlogComponent_ng_template_4_Template, 20, 0, "ng-template", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 3)(6, "div", 4)(7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 8)(11, "div", 9)(12, "div", 10)(13, "form", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "input", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Search");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17)(21, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Popular post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "div", 22)(30, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i-feather", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "app-blog", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 26)(35, "div", 15)(36, "div", 16)(37, "div", 17)(38, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Recent Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 21)(46, "div", 22)(47, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](48, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](49, "i-feather", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](50, "app-blog", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 28)(52, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 31)(55, "div", 8)(56, "div", 32)(57, "div", 33)(58, "h2", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "People are podcasting ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](61, " all over the world ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](64, "i-feather", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "div", 26)(66, "div", 15)(67, "div", 16)(68, "div", 17)(69, "h4", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "All News or Blog Post");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](74, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](75, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](76, "app-blog", 25)(77, "app-blog", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "div", 36)(79, "div", 37)(80, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](82, "i-feather", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](84, "i-feather", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("showNavigationArrows", ctx.showNavigationArrows)("showNavigationIndicators", ctx.showNavigationIndicators);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.blogData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.resentPostData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.blogData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("blogData", ctx.resentPostData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbCarousel, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbSlide, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_0__.BlogComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1ibG9nLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2luZGV4LWJsb2cvaW5kZXgtYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSx3S0FBd0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 517:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/index-services/index-services.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexServicesComponent": () => (/* binding */ IndexServicesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-youtube-player */ 1410);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 7321);








function IndexServicesComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 55)(1, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexServicesComponent_ng_template_18_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "youtube-player", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("videoId", "jNTZpfXYJa4");
  }
}
/***
 * Services Component
 */
class IndexServicesComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.footerVariant = 'bg-light';
    /**
     * Services Data
     */
    this.servicesData = [{
      icon: "uil uil-flip-h h1 text-primary",
      title: "Built for Everyone",
      description: "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper."
    }, {
      icon: "uil uil-minus-path h1 text-primary",
      title: "Responsive Design",
      description: "Allegedly, a Latin scholar established the origin of the established text by compiling unusual word."
    }, {
      icon: "uil uil-layers-alt h1 text-primary",
      title: "Build Everything",
      description: "It seems that only fragments of the original text remain in only fragments the Lorem Ipsum texts used today."
    }];
    /**
     * Customer Testimonial Data
     */
    this.customerData = [{
      image: "assets/images/client/amazon.svg",
      message: `" It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. "`,
      name: "Thomas Israel"
    }, {
      image: "assets/images/client/google.svg",
      message: `" The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. "`,
      name: "Carl Oliver"
    }, {
      image: "assets/images/client/lenovo.svg",
      message: `" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. "`,
      name: "Barbara McIntosh"
    }, {
      image: "assets/images/client/paypal.svg",
      message: `" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. "`,
      name: "Jill Webb"
    }, {
      image: "assets/images/client/shopify.svg",
      message: `" There is now an abundance of readable dummy texts. These are usually used when a text is required. "`,
      name: "Dean Tolle"
    }, {
      image: "assets/images/client/spotify.svg",
      message: `" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. "`,
      name: "Christa Smith"
    }];
  }
  ngOnInit() {}
  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
IndexServicesComponent.ɵfac = function IndexServicesComponent_Factory(t) {
  return new (t || IndexServicesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
IndexServicesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: IndexServicesComponent,
  selectors: [["app-index-services"]],
  decls: 115,
  vars: 12,
  consts: [["id", "home", 1, "bg-half-170", "d-table", "w-100"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-7", "col-md-7"], [1, "title-heading", "mt-4"], [1, "heading", "mb-3"], [1, "para-desc", "text-muted"], [1, "mt-4", "pt-2"], ["routerLink", "/page-services", 1, "btn", "btn-primary", "m-1"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "btn", "btn-icon", "btn-pills", "btn-primary", "m-1", 3, "click"], ["name", "video", 1, "icons"], [1, "fw-bold", "text-uppercase", "small", "align-middle", "ms-2"], ["content", ""], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/illustrator/services.svg", "alt", ""], [1, "section", "pt-0"], [3, "servicesData"], [1, "section", "bg-light"], [1, "col-md-6", "order-2", "order-md-1", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "me-lg-5"], [1, "title", "mb-4"], [1, "text-muted"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary"], [1, "uil", "uil-angle-right-b"], [1, "col-md-6", "order-1", "order-md-2"], ["src", "assets/images/saas/classic01.png", "alt", "", 1, "img-fluid"], [1, "container", "mt-100", "mt-60"], ["id", "counter", 1, "row", "justify-content-center"], [1, "col-md-4", "mt-4", "pt-2"], [1, "counter-box", "text-center", "px-lg-4"], [1, "mb-0", "text-primary", "display-4"], [1, "counter-value", 3, "CountTo", "from", "duration"], [1, "counter-head"], [1, "text-muted", "mb-0"], [1, "section"], [1, "col-md-6"], ["src", "assets/images/illustrator/analyze_report_4.svg", "alt", "", 1, "me-md-4"], [1, "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "section-title", "ms-lg-5"], [1, "mdi", "mdi-chevron-right"], [1, "row", "justify-content-center"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "text-primary", "fw-bold"], [3, "customerData"], [1, "row", "justify-content-center", "mt-4", "pt-2"], [1, "col-lg-7", "col-md-10"], [1, "subcribe-form"], [1, "ms-0"], ["type", "email", "id", "email", "name", "email", "placeholder", "E-mail :", 1, "bg-white", "shadow", "rounded-pill"], ["type", "submit", 1, "btn", "btn-pills", "btn-primary"], [1, "uil", "uil-arrow-right"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450", "width", "780", 3, "videoId"]],
  template: function IndexServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Build Anything ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "For Your Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap v5 html page.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Our Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function IndexServicesComponent_Template_a_click_14_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](19);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.openWindowCustomClass(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i-feather", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "span", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Watch Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, IndexServicesComponent_ng_template_18_Template, 6, 1, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "img", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 15)(23, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "app-services", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "section", 17)(26, "div", 1)(27, "div", 2)(28, "div", 18)(29, "div", 19)(30, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Get Notified About Importent Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Start Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](36, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](38, "img", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 26)(40, "div", 27)(41, "div", 28)(42, "div", 29)(43, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, "Happy Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 28)(51, "div", 29)(52, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](53, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "Awards");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "div", 28)(60, "div", 29)(61, "h2", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "h5", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Project Complete");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "p", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "section", 34)(69, "div", 1)(70, "div", 2)(71, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](72, "img", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](73, "div", 37)(74, "div", 38)(75, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "Clean And Modern Code");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces. Furthermore, it is advantageous when the dummy text is relatively realistic.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Start Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](81, "i", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 26)(83, "div", 40)(84, "div", 41)(85, "div", 42)(86, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Our Happy Customers");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](89, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](93, "app-customer-testmonial", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 26)(95, "div", 40)(96, "div", 41)(97, "div", 42)(98, "h4", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Subscribe for our Latest Newsletter");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "p", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](101, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "span", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 46)(106, "div", 47)(107, "div", 48)(108, "form", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](109, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "button", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Submit ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](112, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "a", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](114, "i-feather", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("servicesData", ctx.servicesData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CountTo", 97)("from", 3)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CountTo", 15)("from", 1)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CountTo", 98)("from", 3)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("customerData", ctx.customerData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_6__.YoutubePlayerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective],
  styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n  .dark-modal .modal-header {\r\n  margin-left: auto;\r\n  border: none;\r\n  padding: 0 !important;\r\n}\r\n\r\n  .dark-modal .close {\r\n  border: none;\r\n  background: transparent;\r\n  color: white;\r\n  font-size: 25px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakIiLCJmaWxlIjoiaW5kZXgtc2VydmljZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFyay1tb2RhbCAubW9kYWwtaGVhZGVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2luZGV4LXNlcnZpY2VzL2luZGV4LXNlcnZpY2VzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFDQSw0OEJBQTQ4QiIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAuZGFyay1tb2RhbCAubW9kYWwtY29udGVudCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZGFyay1tb2RhbCAubW9kYWwtaGVhZGVyIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 8002:
/*!**********************************************************!*\
  !*** ./src/app/core/components/index/index.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPersonalComponent": () => (/* binding */ IndexPersonalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-lightbox */ 5015);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-typed-js */ 7513);
/* harmony import */ var _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/clients-logo/clients-logo.component */ 5229);
/* harmony import */ var _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/blog/blog.component */ 2891);











function IndexPersonalComponent_div_87_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 94)(1, "div", 95)(2, "div", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "img", 97)(4, "div", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 99)(6, "h5", 100)(7, "a", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "h6", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 103)(12, "a", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function IndexPersonalComponent_div_87_Template_a_click_12_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const item_r7 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.visit(item_r7.link));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i-feather", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", item_r7.image, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r7.category);
  }
}
function IndexPersonalComponent_ng_template_155_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \" The only way to do great work is to love what you do. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 108)(4, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Steve Jobs");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function IndexPersonalComponent_ng_template_156_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \" The most important part of writing code is writing code that is easy to read. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 108)(4, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Ryan Dahl");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function IndexPersonalComponent_ng_template_157_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \" If you thing math is hard, try web design. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 108)(4, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "trish Parr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function IndexPersonalComponent_ng_template_158_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \" Code is not code if it does not have code to test the code. \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 108)(4, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Hidetora Tojo");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function IndexPersonalComponent_ng_template_159_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \" The web is like a refrigerator. It\u2019s always there, it\u2019s always on, and you can always get something out of it \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 108)(4, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Gary Vaynerchuk");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function IndexPersonalComponent_ng_template_160_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 106)(1, "p", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " \" Debugging is like being the detective in a crime movie where you are also the murderer \" ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "ul", 108)(4, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "i", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h6", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Felipe Fortes.");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
const _c0 = function () {
  return ["Blockchain Developer", "Web Developer", "Mekeng A Afaka H. Benjamin"];
};
/***
 * Personal Component
 */
class IndexPersonalComponent {
  constructor(_lightbox) {
    this._lightbox = _lightbox;
    this._album = [];
    this.workList = [{
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/go_africa_invest.png',
      title: 'GO Africa Investment',
      link: 'https://go-africa.io',
      category: 'Blockchain'
    }, {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/go_africa_learning.png',
      title: 'GO Africa Learning',
      link: 'https://learning.go-africa.io',
      category: 'Microservices'
    }, {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/react_estate.png',
      title: 'React Estate',
      link: 'https://react-estate-git-main-slowedwalk.vercel.app',
      category: 'React'
    }, {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/airbnb_clone.png',
      title: 'Smart Immo',
      link: 'https://smart-immo.vercel.app',
      category: 'NextJs'
    }, {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/e-commerce.png',
      title: 'Ecommerce Website',
      category: 'NextJs'
    }, {
      image: 'https://mekeng-afaka-portfolio.s3.amazonaws.com/images/expense_tracker.png',
      title: 'Speech Expense Tracker',
      category: 'React'
    }];
    /***
     * Testimonial Slider
     */
    this.customOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: false,
      pullDrag: false,
      navSpeed: 700,
      autoplay: true,
      autoplaySpeed: 1000,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        900: {
          items: 1
        }
      },
      nav: false
    };
    /**
     * Blog Data
     */
    this.blogData = [{
      image: "https://mekeng-afaka-portfolio.s3.amazonaws.com/images/mobile-app.jpg",
      title: "Design your apps in your own way",
      like: "33",
      message: "08",
      name: "Afaka Benjamin",
      date: "13th August, 2019"
    }, {
      image: "https://mekeng-afaka-portfolio.s3.amazonaws.com/images/it.jpg",
      title: "How IT is changing the world as we know it",
      like: "33",
      message: "08",
      name: "Afaka Benjamin",
      date: "13th August, 2019"
    }, {
      image: "https://mekeng-afaka-portfolio.s3.amazonaws.com/images/microservices_1.jpg",
      title: "Discover the world of Microservices ",
      like: "33",
      message: "08",
      name: "Afaka Benjamin",
      date: "13th August, 2019"
    }];
    for (let i = 1; i <= 6; i++) {
      const src = '../../../assets/images/personal/' + i + '.jpg';
      const caption = 'Image ' + i + ' caption here';
      const thumb = '../../../assets/images/personal/' + i + '-thumb.jpg';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };
      this._album.push(album);
    }
  }
  open(index) {
    // open lightbox
    this._lightbox.open(this._album, index);
  }
  visit(link) {
    window.open(link, '_blank');
  }
  close() {
    // close lightbox programmatically
    this._lightbox.close();
  }
  ngOnInit() {}
}
IndexPersonalComponent.ɵfac = function IndexPersonalComponent_Factory(t) {
  return new (t || IndexPersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_lightbox__WEBPACK_IMPORTED_MODULE_0__.Lightbox));
};
IndexPersonalComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
  type: IndexPersonalComponent,
  selectors: [["app-index"]],
  decls: 244,
  vars: 12,
  consts: [["id", "home", 1, "bg-home", "rtl-personal-hero", "bg-light", "d-flex", "align-items-center", "backgroung_img"], [1, "container"], [1, "row", "align-items-center"], [1, "col-lg-8", "col-md-9"], [1, "title-heading", "mt-4"], [1, "display-3", "fw-bold", "mb-3"], [3, "strings", "shuffle", "typeSpeed", "loop"], [1, "element", "typing", "text-primary"], [1, "para-desc", "text-muted"], [1, "mt-4", "pt-2"], [1, "btn", "btn-primary", "mt-2", "me-2", 3, "ngxScrollTo"], [1, "uil", "uil-camera"], [1, "btn", "btn-outline-primary", "mt-2", 3, "ngxScrollTo"], [1, "uil", "uil-cloud-download"], [1, "section"], [1, "col-md-6"], [1, "section-title"], [1, "title"], [1, "text-primary", "mb-4"], [1, "text-muted", "mb-0", "justify-content-center"], [1, "mt-4"], [1, "btn", "btn-primary", "mouse-down", 3, "ngxScrollTo"], [1, "mdi", "mdi-phone"], [1, "col-md-6", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "ms-md-4"], [1, "progress-box"], [1, "title", "text-muted"], [1, "progress"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "85%"], [1, "progress-value", "d-block", "text-muted", "h6"], [1, "progress-box", "mt-4"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "65%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "70%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "80%"], [1, "progress-bar", "position-relative", "bg-primary", 2, "width", "75%"], ["id", "portfolio", 1, "container", "mt-100", "mt-60"], [1, "row"], [1, "col-12"], [1, "section-title", "mb-4", "pb-2"], [1, "title", "mb-4"], [1, "text-muted", "para-desc", "mb-0"], ["class", "col-lg-4 col-md-6 col-12 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2"], ["routerLink", "/portfolio-modern-three", 1, "btn", "btn-outline-primary"], [1, "mdi", "mdi-chevron-right"], [1, "container", "mt-100", "mt-60"], [1, "text-primary", "fw-bold"], [1, "col-md-4", "mt-4", "pt-2"], [1, "card", "work-process", "border-0", "rounded", "shadow"], [1, "card-body"], [1, "text-muted", "para"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0", "mt-2"], [1, "step", "h1", "mb-0", "fw-bold"], [1, "step-icon"], [1, "mdi", "mdi-chevron-double-right", "mdi-36px"], [1, "mdi", "mdi-check-all", "mdi-36px"], [1, "section", 2, "background", "url('assets/images/personal/bg02.jpg') center center"], [1, "bg-overlay"], [1, "row", "justify-content-center"], [1, "col-lg-7", "text-center"], ["id", "customer-testi", 3, "options"], ["carouselSlide", ""], [1, "py-4", "border-bottom"], [1, "container", "py-4"], [3, "blogData"], ["id", "contact", 1, "container", "mt-100", "mt-60"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "rounded", "shadow", "border-0"], [1, "card-title"], [1, "custom-form", "mt-3"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg", 1, "mb-0"], ["id", "simple-msg"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email :", 1, "form-control", "ps-5"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "Subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons", "clearfix"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Message :", 1, "form-control", "ps-5"], [1, "d-grid"], ["type", "submit", "id", "submit", "name", "send", 1, "btn", "btn-primary"], [1, "col-lg-8", "col-md-6", "ps-md-3", "pe-md-3", "mt-4", "pt-2"], [1, "card", "border-0", "shadow", "rounded"], [1, "map", "map-height-two", "map-gray"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.857740238645!2d9.713400643402336!3d4.078467137810172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061120c75f656b5%3A0x74ada59824355dae!2sBOCOM%20Akwa%20Nord%2C%20Douala!5e0!3m2!1sfr!2scm!4v1683373974503!5m2!1sfr!2scm", "width", "600", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "card-body", "p-0"], ["alt", "work-image", 1, "img-fluid", 3, "src"], [1, "overlay-work", "bg-dark"], [1, "content"], [1, "mb-0"], ["routerLink", "/page-work-detail", 1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], [1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill", "mfp-image", 3, "click"], ["name", "external-link", 1, "fea", "icon-sm"], [1, "customer-testi", "text-center"], [1, "text-light", "para-dark", "h6", "fst-italic"], [1, "list-unstyled", "mb-0", "mt-3"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-light", "title-dark"], ["src", "assets/images/client/01.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], ["src", "assets/images/client/03.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], ["src", "assets/images/client/06.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"]],
  template: function IndexPersonalComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h1", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Here I'm \uD83D\uDC4B\uD83C\uDFFD");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "ngx-typed-js", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "span", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "p", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, " I am always looking for new challenges that can help me grow professionally, and I am passionate about computer and digital technologies. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, " View Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "i", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Hire Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "section", 14)(20, "div", 1)(21, "div", 2)(22, "div", 15)(23, "div", 16)(24, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "About Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "h6", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](27, "Welcome to my portfolio!");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "p", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, " I am a self-motivated and reliable developer with a passion for learning and keeping up with the latest trends and technologies. I have experience in web development and mobile app development, and I am able to work well both in a team environment as well as using my own initiative. Here you will find a collection of my work showcasing my skills and expertise in various areas of the field. I believe in using my skills for good, and I hope you enjoy perusing my portfolio. Please feel free to contact me with any questions or opportunities to collaborate on future projects. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 20)(31, "a", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "i", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, " Contact Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 23)(35, "div", 24)(36, "div", 25)(37, "h6", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Spring boot / Spring Cloud");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 27)(40, "div", 28)(41, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 30)(44, "h6", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](45, "NodeJs");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 27)(47, "div", 28)(48, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "85%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 30)(51, "h6", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](52, "Blockchain / Web 3");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 27)(54, "div", 31)(55, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "65%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 30)(58, "h6", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "Angular / TypeScript");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 27)(61, "div", 32)(62, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "75%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 30)(65, "h6", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](66, "NextJs (TypeScript)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 27)(68, "div", 33)(69, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "80%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 30)(72, "h6", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Cloud Computing");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 27)(75, "div", 34)(76, "div", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](77, "75%");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 35)(79, "div", 36)(80, "div", 37)(81, "div", 38)(82, "h4", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](83, "My Work & Portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "p", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, " Take a look at my developer portfolio, featuring my top projects and skills. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](87, IndexPersonalComponent_div_87_Template, 14, 3, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 42)(89, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](90, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](91, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 45)(93, "div", 36)(94, "div", 37)(95, "div", 38)(96, "h4", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Work Process");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99, " Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](100, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](101, "Afaka, A.K.A (Hidetora)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](102, " that can provide everything you need to generate awareness, drive traffic, connect. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "div", 36)(104, "div", 47)(105, "div", 48)(106, "div", 49)(107, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](108, "Discuss The Project");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](109, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](110, " Let\u2019s collaborate and openly discuss the project. We can exchange ideas and propose solutions to achieve the best possible outcome. I look forward to starting the conversation and working together towards success! ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](111, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](112, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "ul", 52)(115, "li", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](116, "Step 01.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "li", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](118, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "div", 47)(120, "div", 48)(121, "div", 49)(122, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "Develop & Elaborate");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](125, " Take the initial idea or concept and develop it further through elaboration and expansion. This involves refining the details, adding depth and complexity, and exploring various perspectives to create a more comprehensive and nuanced understanding. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](128, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "ul", 52)(130, "li", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](131, "Step 02.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](132, "li", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](133, "i", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](134, "div", 47)(135, "div", 48)(136, "div", 49)(137, "h4", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](138, "Final Approvement");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](139, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](140, " The final step in this project development process is obtaining final approval from all stakeholders. This involves presenting the plan to all stakeholders and getting their approval before moving forward with the project ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](141, "a", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](142, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](143, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](144, "ul", 52)(145, "li", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](146, "Step 03.");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](147, "li", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](148, "i", 56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](149, "section", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](150, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](151, "div", 1)(152, "div", 59)(153, "div", 60)(154, "owl-carousel-o", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](155, IndexPersonalComponent_ng_template_155_Template, 17, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](156, IndexPersonalComponent_ng_template_156_Template, 17, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](157, IndexPersonalComponent_ng_template_157_Template, 17, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](158, IndexPersonalComponent_ng_template_158_Template, 17, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](159, IndexPersonalComponent_ng_template_159_Template, 17, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](160, IndexPersonalComponent_ng_template_160_Template, 17, 0, "ng-template", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](161, "section", 63)(162, "div", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](163, "app-clients-logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](164, "section", 14)(165, "div", 1)(166, "div", 59)(167, "div", 37)(168, "div", 38)(169, "h4", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](170, "Latest News");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](171, "p", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](172, " Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](173, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](174, "Afaka, A.K.A (Hidetora)");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](175, " that can provide everything you need to generate awareness, drive traffic, connect. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](176, "app-blog", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](177, "div", 66)(178, "div", 59)(179, "div", 37)(180, "div", 38)(181, "h4", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](182, "Contact Me");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](183, "p", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](184, " Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](185, "span", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](186, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](187, " that can provide everything you need to generate awareness, drive traffic, connect. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](188, "div", 36)(189, "div", 67)(190, "div", 68)(191, "div", 49)(192, "h4", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](193, "Get In Touch !");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](194, "div", 70)(195, "form", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](196, "p", 72)(197, "div", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](198, "div", 36)(199, "div", 37)(200, "div", 74)(201, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](202, "Your Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](203, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](204, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](205, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](206, "i-feather", 78)(207, "input", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](208, "div", 37)(209, "div", 74)(210, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](211, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](212, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](213, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](214, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](215, "i-feather", 80)(216, "input", 81);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](217, "div", 37)(218, "div", 74)(219, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](220, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](221, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](222, "i-feather", 82)(223, "input", 83);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](224, "div", 37)(225, "div", 74)(226, "label", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](227, "Comments ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](228, "span", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](229, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](230, "div", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](231, "i-feather", 84)(232, "textarea", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](233, "div", 36)(234, "div", 37)(235, "div", 86)(236, "button", 87);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](237, " Send Message ");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](238, "div", 88)(239, "div", 89)(240, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](241, "iframe", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](242, "a", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](243, "i-feather", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("strings", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c0))("shuffle", true)("typeSpeed", 80)("loop", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#portfolio");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.workList);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](67);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.customOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](22);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("blogData", ctx.blogData);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](66);
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselComponent, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselSlideDirective, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_8__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgForm, ngx_typed_js__WEBPACK_IMPORTED_MODULE_10__.NgxTypedJsComponent, _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent, _shared_blog_blog_component__WEBPACK_IMPORTED_MODULE_2__.BlogComponent],
  styles: [".backgroung_img[_ngcontent-%COMP%] {\n    background-image: url(\"https://mekeng-afaka-portfolio.s3.amazonaws.com/images/contact-detail.jpg\");\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n    height: 100vh;\n    width: 100%;    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrR0FBa0c7SUFDbEcsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7QUFDZiIsImZpbGUiOiJpbmRleC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmdfaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21la2VuZy1hZmFrYS1wb3J0Zm9saW8uczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvY29udGFjdC1kZXRhaWwuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTsgICAgXG59Il19 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL2luZGV4L2luZGV4LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrR0FBa0c7SUFDbEcsNEJBQTRCO0lBQzVCLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsYUFBYTtJQUNiLFdBQVc7QUFDZjtBQUNBLHdxQkFBd3FCIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmdfaW1nIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL21la2VuZy1hZmFrYS1wb3J0Zm9saW8uczMuYW1hem9uYXdzLmNvbS9pbWFnZXMvY29udGFjdC1kZXRhaWwuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwJTsgICAgXG59Il0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9959:
/*!**********************************************************************!*\
  !*** ./src/app/core/components/master-page/master-page.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MasterPageComponent": () => (/* binding */ MasterPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/header/header.component */ 9470);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/footer/footer.component */ 5227);




class MasterPageComponent {
  constructor() {}
  ngOnInit() {}
  /**
   * Router activation
   */
  onActivate(componentReference) {
    this.addclass = componentReference.navClass;
    this.buttonShow = componentReference.buttonList;
    this.TopbarShow = componentReference.sliderTopbar;
    this.footerClass = componentReference.footerVariant;
    this.developerPage = componentReference.isdeveloper;
    this.hideFooter = componentReference.hideFooter;
    this.shopPages = componentReference.shopPages;
  }
}
MasterPageComponent.ɵfac = function MasterPageComponent_Factory(t) {
  return new (t || MasterPageComponent)();
};
MasterPageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: MasterPageComponent,
  selectors: [["app-master-page"]],
  decls: 3,
  vars: 7,
  consts: [[3, "navClass", "buttonList", "sliderTopbar", "isdeveloper", "shopPages"], [3, "activate"], [3, "footerVariant", "hideFooter"]],
  template: function MasterPageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "router-outlet", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("activate", function MasterPageComponent_Template_router_outlet_activate_1_listener($event) {
        return ctx.onActivate($event);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer", 2);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("navClass", ctx.addclass)("buttonList", ctx.buttonShow)("sliderTopbar", ctx.TopbarShow)("isdeveloper", ctx.developerPage)("shopPages", ctx.shopPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("footerVariant", ctx.footerClass)("hideFooter", ctx.hideFooter);
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXN0ZXItcGFnZS5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL21hc3Rlci1wYWdlL21hc3Rlci1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLHdLQUF3SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6507:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-aboutus-two/page-aboutus-two.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutusTwoComponent": () => (/* binding */ PageAboutusTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-youtube-player */ 1410);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 7321);
/* harmony import */ var _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/clients-logo/clients-logo.component */ 5229);








function PageAboutusTwoComponent_ng_template_120_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_126_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_138_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 95)(3, "p", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "See More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "i-feather", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
}
function PageAboutusTwoComponent_ng_template_150_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 103)(1, "button", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageAboutusTwoComponent_ng_template_150_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r9);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "youtube-player", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("videoId", "yba7hPeTSjk");
  }
}
/**
 * Aboutus Two Component
 */
class PageAboutusTwoComponent {
  constructor(modalService) {
    this.modalService = modalService;
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageAboutusTwoComponent.ɵfac = function PageAboutusTwoComponent_Factory(t) {
  return new (t || PageAboutusTwoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal));
};
PageAboutusTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: PageAboutusTwoComponent,
  selectors: [["app-page-aboutus-two"]],
  decls: 174,
  vars: 5,
  consts: [["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/company/aboutus.jpg')"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level", "title-heading"], [1, "text-white", "title-dark"], [1, "text-white-50", "para-desc", "mb-0", "mx-auto"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], ["id", "counter", 1, "row", "align-items-center"], [1, "col-md-6"], ["src", "assets/images/company/about2.png", "alt", "", 1, "img-fluid"], [1, "col-md-6", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "ms-lg-4"], [1, "d-flex", "mb-4"], [1, "text-primary", "h1", "mb-0"], [1, "counter-value", "display-1", "fw-bold", 3, "CountTo", "from", "duration"], [1, "h6", "align-self-end", "ms-2"], [1, "section-title"], [1, "title", "mb-4"], [1, "text-muted"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-3"], [1, "container", "mt-5"], [1, "section", "bg-light"], [1, "col-12"], [1, "section-title", "text-center", "mb-4", "pb-2"], [1, "text-primary"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "row"], [1, "col-md-4", "mt-4", "pt-2"], [1, "card", "features", "feature-clean", "work-process", "bg-transparent", "process-arrow", "border-0", "text-center"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-presentation-edit", "d-block", "rounded", "h3", "mb-0"], [1, "card-body"], [1, "text-dark"], [1, "text-muted", "mb-0"], [1, "col-md-4", "mt-md-5", "pt-md-3", "mt-4", "pt-2"], [1, "uil", "uil-airplay", "d-block", "rounded", "h3", "mb-0"], [1, "col-md-4", "mt-md-5", "pt-md-5", "mt-4", "pt-2"], [1, "card", "features", "feature-clean", "work-process", "bg-transparent", "d-none-arrow", "border-0", "text-center"], [1, "uil", "uil-image-check", "d-block", "rounded", "h3", "mb-0"], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-end", "mb-4", "pb-4"], [1, "col-md-8"], [1, "section-title", "text-md-left"], [1, "text-muted", "mb-0", "para-desc"], [1, "col-md-4", "mt-4", "mt-sm-0"], [1, "text-center", "text-md-end"], ["href", "javascript:void(0)", 1, "text-primary", "h6"], ["name", "arrow-right", 1, "fea", "icon-sm"], [1, "d-flex"], ["ngbNav", "", "orientation", "vertical", 1, "nav-pills", "bg-white", "rounded", "shadow", "p-3", "mb-0", "mt-4", "col-md-4", "pt-2"], ["nav", "ngbNav"], ["ngbNavItem", "top"], ["ngbNavLink", "", 1, "rounded"], [1, "text-center", "pt-1", "pb-1"], [1, "mb-0"], ["ngbNavContent", ""], ["ngbNavItem", ""], [1, "mt-4", "ms-4", 3, "ngbNavOutlet"], [1, "section", "bg-light", "pt-0"], [1, "col-12", "text-center"], [1, "video-solution-cta", "position-relative", 2, "z-index", "1"], ["src", "assets/images/cta-bg.jpg", "alt", "", 1, "img-fluid", "rounded-md", "shadow-lg"], [1, "play-icon"], ["href", "javascript:void(0);", 1, "play-btn", "video-play-icon", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow-lg"], ["content", ""], [1, "content", "mt-md-4", "pt-md-2"], [1, "col-lg-10", "text-center"], [1, "row", "align-items-center"], [1, "col-md-6", "mt-4", "pt-2"], [1, "section-title", "text-md-start"], [1, "text-white-50"], [1, "title", "text-white", "title-dark", "mb-0"], [1, "col-md-6", "col-12", "mt-4", "pt-md-2"], [1, "text-white-50", "para-desc"], ["href", "javascript:void(0)", 1, "text-white", "title-dark"], [1, "feature-posts-placeholder", "bg-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], ["id", "developing", "role", "tabpanel", "aria-labelledby", "webdeveloping", 1, "bg-white", "show", "active", "p-4", "rounded", "shadow"], ["src", "assets/images/work/7.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "text-primary"], ["id", "data-analise", "role", "tabpanel", "aria-labelledby", "database", 1, "bg-white", "p-4", "rounded", "shadow"], ["src", "assets/images/work/8.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], ["id", "security", "role", "tabpanel", "aria-labelledby", "server", 1, "bg-white", "p-4", "rounded", "shadow"], ["src", "assets/images/work/9.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], ["id", "designing", "role", "tabpanel", "aria-labelledby", "webdesigning", 1, "bg-white", "p-4", "rounded", "shadow"], ["src", "assets/images/work/12.jpg", "alt", "", 1, "img-fluid", "rounded", "shadow"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["height", "450", "width", "780", 3, "videoId"]],
  template: function PageAboutusTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h1", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Aboutus ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 8)(11, "nav", 9)(12, "ul", 10)(13, "li", 11)(14, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "li", 11)(17, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Company");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "li", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Aboutus");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "svg", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "path", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "section", 19)(26, "div", 2)(27, "div", 20)(28, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "img", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 23)(31, "div", 24)(32, "div", 25)(33, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](34, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35, "+");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Years ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](38, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, " Experience");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 29)(41, "h4", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Who we are ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49, "Contact us");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](51, "app-clients-logo");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "section", 35)(53, "div", 2)(54, "div", 3)(55, "div", 36)(56, "div", 37)(57, "h6", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Work Process");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "h4", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "How do we works ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "p", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 40)(67, "div", 41)(68, "div", 42)(69, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](70, "i", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "div", 45)(72, "h5", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, "Discussion");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 48)(77, "div", 42)(78, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](79, "i", 49);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "div", 45)(81, "h5", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](82, "Strategy & Testing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "Generators convallis odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "div", 50)(86, "div", 51)(87, "div", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](88, "i", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "div", 45)(90, "h5", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, "Reporting");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "p", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93, "Internet Proin tempus odio, vel pharetra quam malesuada vel. Nam porttitor malesuada.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](94, "div", 53)(95, "div", 54)(96, "div", 55)(97, "div", 56)(98, "h6", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99, "Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](100, "h4", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](101, "What we do ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](102, "p", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](106, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 58)(108, "div", 59)(109, "a", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](110, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](111, "i-feather", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](112, "div", 62)(113, "ul", 63, 64)(115, "li", 65)(116, "a", 66)(117, "div", 67)(118, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](119, "Web Developing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](120, PageAboutusTwoComponent_ng_template_120_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](121, "li", 70)(122, "a", 66)(123, "div", 67)(124, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Database Analysis");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](126, PageAboutusTwoComponent_ng_template_126_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](127, "li", 70)(128, "a", 66)(129, "div", 67)(130, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](131, "Server Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](132, PageAboutusTwoComponent_ng_template_132_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](133, "li", 70)(134, "a", 66)(135, "div", 67)(136, "h6", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](137, "Web Designing");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](138, PageAboutusTwoComponent_ng_template_138_Template, 8, 0, "ng-template", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](139, "div", 71);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](140, "section", 72)(141, "div", 2)(142, "div", 3)(143, "div", 73)(144, "div", 74)(145, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](146, "img", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](147, "div", 76)(148, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PageAboutusTwoComponent_Template_a_click_148_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10);
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](151);
        return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openWindowCustomClass(_r5));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](149, "i", 78);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](150, PageAboutusTwoComponent_ng_template_150_Template, 6, 1, "ng-template", null, 79, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](152, "div", 80)(153, "div", 3)(154, "div", 81)(155, "div", 82)(156, "div", 83)(157, "div", 84)(158, "h6", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](159, "Team");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](160, "h4", 86);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](161, "Meet Experience ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](162, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](163, " Team Member");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](164, "div", 87)(165, "div", 84)(166, "p", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](167, "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](168, "a", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](169, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](170, "i-feather", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](171, "div", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](172, "a", 91);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](173, "i-feather", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](114);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](34);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("CountTo", 15)("from", 0)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngbNavOutlet", _r0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, ngx_youtube_player__WEBPACK_IMPORTED_MODULE_7__.YoutubePlayerComponent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavContent, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNav, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItem, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavItemRole, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLink, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavLinkBase, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbNavOutlet, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective, _shared_clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent],
  styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n}\r\n\r\n  .dark-modal .modal-header {\r\n  border: none\r\n}\r\n\r\n  .dark-modal .close {\r\n  color: white;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtYWJvdXR1cy10d28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoicGFnZS1hYm91dHVzLXR3by5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtYWJvdXR1cy10d28vcGFnZS1hYm91dHVzLXR3by5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtBQUNkOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBLG90QkFBb3RCIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5kYXJrLW1vZGFsIC5tb2RhbC1oZWFkZXIge1xyXG4gIGJvcmRlcjogbm9uZVxyXG59XHJcblxyXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5296:
/*!************************************************************************!*\
  !*** ./src/app/core/components/page-aboutus/page-aboutus.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageAboutusComponent": () => (/* binding */ PageAboutusComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _shared_features_features_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/features/features.component */ 1717);







function PageAboutusComponent_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 46)(1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageAboutusComponent_ng_template_31_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
      const modal_r3 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r3.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "iframe", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function PageAboutusComponent_div_70_a_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "i-feather", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("name", item_r8);
  }
}
function PageAboutusComponent_div_70_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 51)(1, "div", 52)(2, "div", 53)(3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul", 55)(6, "li", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, PageAboutusComponent_div_70_a_7_Template, 2, 1, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 58)(9, "h5", 59)(10, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "small", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", data_r6.profile, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", data_r6.list);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](data_r6.designation);
  }
}
;
/**
 * Aboutus Component
 */
class PageAboutusComponent {
  constructor(modalService) {
    this.modalService = modalService;
    /**
     * Member Data
     */
    this.memberData = [{
      profile: "assets/images/client/01.jpg",
      list: ['facebook', "instagram", "twitter", "linkedin"],
      name: "Ronny Jofra",
      designation: "C.E.O"
    }, {
      profile: "assets/images/client/04.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Micheal Carlo",
      designation: "Director"
    }, {
      profile: "assets/images/client/02.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Aliana Rosy",
      designation: "Manager"
    }, {
      profile: "assets/images/client/03.jpg",
      list: ["facebook", "instagram", "twitter", "linkedin"],
      name: "Sofia Razaq",
      designation: "Developer"
    }];
  }
  ngOnInit() {}
  /**
  * Open modal for show the video
  * @param content content of modal
  */
  openWindowCustomClass(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageAboutusComponent.ɵfac = function PageAboutusComponent_Factory(t) {
  return new (t || PageAboutusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
PageAboutusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: PageAboutusComponent,
  selectors: [["app-page-aboutus"]],
  decls: 89,
  vars: 2,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-5", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], ["src", "assets/images/company/about.jpg", "alt", "", 1, "rounded", "img-fluid", "mx-auto", "d-block"], [1, "play-icon"], ["href", "javascript:void(0);", "data-type", "youtube", "data-id", "yba7hPeTSjk", 1, "play-btn", 3, "click"], [1, "mdi", "mdi-play", "text-primary", "rounded-circle", "bg-white", "shadow"], ["content", ""], [1, "col-lg-7", "col-md-7", "mt-4", "pt-2", "mt-sm-0", "pt-sm-0"], [1, "section-title", "ms-lg-4"], [1, "title", "mb-4"], [1, "text-muted"], [1, "text-primary", "fw-bold"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-3"], [1, "uil", "uil-angle-right-b"], [1, "container", "mt-100", "mt-60"], [1, "col-12", "text-center"], [1, "section-title", "mb-4", "pb-2"], [1, "text-muted", "para-desc", "mx-auto", "mb-0"], [1, "section", "bg-light"], [1, "row"], ["class", "col-lg-3 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "section-title"], [1, "text-muted", "para-desc", "mx-auto"], [1, "mt-4"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-2", "me-2"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "mt-2"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://player.vimeo.com/video/99025203", "height", "450", "width", "780", "frameborder", "0", "allowfullscreen", "", "allow", "autoplay; encrypted-media"], [1, "col-lg-3", "col-md-6", "mt-4", "pt-2"], [1, "card", "team", "text-center", "bg-transparent", "border-0"], [1, "card-body", "p-0"], ["alt", "", 1, "img-fluid", "avatar", "avatar-ex-large", "rounded-circle", 3, "src"], [1, "list-unstyled", "social-icon", "team-icon", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", "class", "rounded ms-1", 4, "ngFor", "ngForOf"], [1, "content", "pt-3", "pb-3"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "name", "text-dark"], [1, "designation", "text-muted"], ["href", "javascript:void(0)", 1, "rounded", "ms-1"], [1, "fea", "icon-sm", "fea-social", 3, "name"]],
  template: function PageAboutusComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " About us ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 17)(23, "div", 1)(24, "div", 18)(25, "div", 19)(26, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 21)(29, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function PageAboutusComponent_Template_a_click_29_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](32);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.openWindowCustomClass(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "i", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, PageAboutusComponent_ng_template_31_Template, 6, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25)(34, "div", 26)(35, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Our Story");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, "Buy Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "i", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 32)(46, "div", 2)(47, "div", 33)(48, "div", 34)(49, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](52, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](54, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "app-features");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "section", 36)(58, "div", 1)(59, "div", 37)(60, "div", 33)(61, "div", 34)(62, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](63, "Our Greatest Minds");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "p", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](65, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](67, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "div", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, PageAboutusComponent_div_70_Template, 14, 4, "div", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "div", 32)(72, "div", 2)(73, "div", 33)(74, "div", 39)(75, "h4", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](76, "See everything about your employee at one place.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "p", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Start working with ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](80, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](81, " that can provide everything you need to generate awareness, drive traffic, connect.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "div", 41)(83, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "Get Started Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "a", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](86, "Free Trial");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "a", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i-feather", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.memberData);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_5__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_6__.ScrollToDirective, _shared_features_features_component__WEBPACK_IMPORTED_MODULE_0__.FeaturesComponent],
  styles: [".dark-modal .modal-content {\r\n  background-color: #000000;\r\n  color: white;\r\n  background: none;\r\n  border: none;\r\n  }\r\n    .dark-modal .modal-header {\r\n  border : none\r\n  }\r\n    .dark-modal .close {\r\n  color: white;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtYWJvdXR1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQSxZQUFZO0VBQ1oiLCJmaWxlIjoicGFnZS1hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyIDogbm9uZVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdfQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtYWJvdXR1cy9wYWdlLWFib3V0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWjtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0EsWUFBWTtFQUNaO0FBQ0YsNHNCQUE0c0IiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XHJcbiAgYm9yZGVyIDogbm9uZVxyXG4gIH1cclxuICA6Om5nLWRlZXAgLmRhcmstbW9kYWwgLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgfSJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 3380:
/*!****************************************************************************************!*\
  !*** ./src/app/core/components/page-blog-detail-two/page-blog-detail-two.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogDetailTwoComponent": () => (/* binding */ PageBlogDetailTwoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





/**
 * page Blog-Detail-Two Component
 */
class PageBlogDetailTwoComponent {
  constructor() {
    /**
     * Nav Light Class Add
     */
    this.navClass = 'nav-light';
  }
  ngOnInit() {}
}
PageBlogDetailTwoComponent.ɵfac = function PageBlogDetailTwoComponent_Factory(t) {
  return new (t || PageBlogDetailTwoComponent)();
};
PageBlogDetailTwoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageBlogDetailTwoComponent,
  selectors: [["app-page-blog-detail-two"]],
  decls: 169,
  vars: 5,
  consts: [["id", "home", 1, "bg-half", "d-table", "w-100", 2, "background", "url('assets/images/1.jpg') center center"], [1, "bg-overlay"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title", "text-white", "title-dark"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "col-lg-10"], [1, "row"], [1, "col-md-2", "d-none", "d-md-block"], [1, "list-unstyled", "text-center", "sticky-bar", "social-icon", "mb-0"], [1, "mb-3", "h6"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-md-10"], [1, "text-muted"], [1, "list-unstyled", "d-flex", "justify-content-between", "mt-4"], [1, "list-inline-item", "user", "me-2"], ["href", "javascript:void(0)", 1, "text-muted"], [1, "uil", "uil-user", "text-dark"], [1, "list-inline-item", "date", "text-muted"], [1, "uil", "uil-calendar-alt", "text-dark"], ["src", "assets/images/blog/bg1.jpg", "alt", "", 1, "img-fluid", "rounded-md", "shadow"], [1, "mt-4"], [1, "media-list", "list-unstyled", "mb-0"], [1, "d-flex", "justify-content-between"], [1, "d-flex", "align-items-center"], ["href", "#", 1, "pe-3"], ["src", "assets/images/client/01.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "flex-1", "commentor-detail"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-dark", "media-heading"], [1, "text-muted", 3, "ngxScrollTo"], [1, "mdi", "mdi-reply"], [1, "mt-3"], [1, "text-muted", "fst-italic", "p-3", "bg-light", "rounded"], ["src", "assets/images/client/02.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], ["href", "javascript:void(0)", 1, "media-heading", "text-dark"], ["src", "assets/images/client/03.jpg", "alt", "img", 1, "img-fluid", "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "list-unstyled", "ps-4", "ps-md-5", "sub-comment"], [1, "col-md-12"], [1, "mb-3"], [1, "form-label"], [1, "form-icon", "position-relative"], ["name", "message-circle", 1, "fea", "icon-sm", "icons"], ["id", "message", "placeholder", "Your Comment", "rows", "5", "name", "message", "required", "", 1, "form-control", "ps-5"], [1, "col-lg-6"], [1, "text-danger"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["id", "name", "name", "name", "type", "text", "placeholder", "Name", "required", "", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["id", "email", "type", "email", "placeholder", "Email", "name", "email", "required", "", 1, "form-control", "ps-5"], [1, "send", "d-grid"], ["type", "submit", 1, "btn", "btn-primary"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"]],
  template: function PageBlogDetailTwoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "h4", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Smartest Applications for ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Your Business ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7)(11, "nav", 8)(12, "ul", 9)(13, "li", 10)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 10)(17, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog Details");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14)(22, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 18)(26, "div", 2)(27, "div", 3)(28, "div", 19)(29, "div", 20)(30, "div", 21)(31, "ul", 22)(32, "li", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Share");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i-feather", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i-feather", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li")(41, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "i-feather", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li")(44, "a", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i-feather", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 29)(47, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'. It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 31)(50, "li", 32)(51, "a", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Mornings contain the secret to an extraordinarily successful life");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts. If the distribution of letters and 'words' is random, the reader will not be distracted from making a neutral judgement on the visual impact and readability of the typefaces (typography), or the distribution of text on the page (layout or type area).");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Comments :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul", 39)(65, "li", 38)(66, "div", 40)(67, "div", 41)(68, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 44)(71, "h6", 45)(72, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Lorenzo Peterson");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "15th August, 2019 at 01:25 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 49)(80, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li", 38)(83, "div", 40)(84, "div", 41)(85, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 44)(88, "h6", 45)(89, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Tammy Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "15th August, 2019 at 05:44 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49)(97, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li", 38)(100, "div", 40)(101, "div", 41)(102, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 44)(105, "h6", 45)(106, "a", 52);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Tammy Camacho");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "16th August, 2019 at 03:44 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 49)(114, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "ul", 54)(117, "li", 38)(118, "div", 40)(119, "div", 41)(120, "a", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 44)(123, "h6", 45)(124, "a", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Lorenzo Peterson");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "small", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "17th August, 2019 at 01:25 pm");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " Reply");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 49)(132, "p", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "\" There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "h5", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Leave A Comment :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "form", 49)(137, "div", 20)(138, "div", 55)(139, "div", 56)(140, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Your Comment");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "i-feather", 59)(144, "textarea", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "div", 61)(146, "div", 56)(147, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](152, "i-feather", 63)(153, "input", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 61)(155, "div", 56)(156, "label", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](157, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "span", 62);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 58);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i-feather", 65)(162, "input", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 55)(164, "div", 67)(165, "button", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "a", 69);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "i-feather", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](76);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_3__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctZGV0YWlsLXR3by5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtYmxvZy1kZXRhaWwtdHdvL3BhZ2UtYmxvZy1kZXRhaWwtdHdvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9MQUFvTCIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6126:
/*!****************************************************************************!*\
  !*** ./src/app/core/components/page-blog-list/page-blog-list.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageBlogListComponent": () => (/* binding */ PageBlogListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);





function PageBlogListComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30)(2, "div", 31)(3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 33)(5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35)(7, "small", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "small", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 32)(14, "div", 40)(15, "h5")(16, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 43)(21, "ul", 44)(22, "li", 45)(23, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 48)(27, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
  }
}
;
/**
 * Page Blog-List Component
 */
class PageBlogListComponent {
  constructor() {
    /**
     * Blog Data
     */
    this.blogListData = [{
      image: "assets/images/work/14.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/15.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/16.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/17.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/18.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/19.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }, {
      image: "assets/images/work/13.jpg",
      title: "Design your apps in your own way",
      content: "Due to its widespread use as filler text for layouts, non-readability",
      like: "33",
      message: "08",
      name: "Calvin Carlo",
      date: "13th August, 2019"
    }];
  }
  ngOnInit() {}
}
PageBlogListComponent.ɵfac = function PageBlogListComponent_Factory(t) {
  return new (t || PageBlogListComponent)();
};
PageBlogListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageBlogListComponent,
  selectors: [["app-page-blog-list"]],
  decls: 48,
  vars: 2,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], ["class", "col-lg-6 col-12 mb-4 pb-2", 4, "ngFor", "ngForOf"], [1, "col-12"], [1, "pagination", "justify-content-center", "mb-0"], [1, "page-item"], ["href", "javascript:void(0)", "aria-label", "Previous", 1, "page-link"], [1, "page-item", "active"], ["href", "javascript:void(0)", 1, "page-link"], ["href", "javascript:void(0)", "aria-label", "Next", 1, "page-link"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "col-lg-6", "col-12", "mb-4", "pb-2"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], [1, "row", "align-items-center", "g-0"], [1, "col-md-6"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "overlay", "bg-dark"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "text-muted", "mb-0"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"]],
  template: function PageBlogListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Blog Listing ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Page");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 9)(17, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Blog");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Blog List");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13)(22, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 17)(26, "div", 1)(27, "div", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PageBlogListComponent_div_28_Template, 33, 7, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 20)(30, "ul", 21)(31, "li", 22)(32, "a", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Prev");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 24)(35, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 22)(38, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "li", 22)(41, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li", 22)(44, "a", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Next");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i-feather", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogListData);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlLWJsb2ctbGlzdC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtYmxvZy1saXN0L3BhZ2UtYmxvZy1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9894:
/*!********************************************************************************!*\
  !*** ./src/app/core/components/page-contact-one/page-contact-one.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageContactOneComponent": () => (/* binding */ PageContactOneComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);






function PageContactOneComponent_ng_template_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 68)(1, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactOneComponent_ng_template_57_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "iframe", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
/**
 * Page Contact-One Component
 */
class PageContactOneComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {}
  mapView(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
PageContactOneComponent.ɵfac = function PageContactOneComponent_Factory(t) {
  return new (t || PageContactOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbModal));
};
PageContactOneComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageContactOneComponent,
  selectors: [["app-page-contact-one"]],
  decls: 122,
  vars: 1,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section", "pb-0"], [1, "row"], [1, "col-md-4"], [1, "card", "border-0", "text-center", "features", "feature-clean"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-phone", "d-block", "rounded", "h3", "mb-0"], [1, "content", "mt-3"], [1, "fw-bold"], [1, "text-muted"], ["href", "tel:+237 691-410-370", 1, "text-primary"], [1, "col-md-4", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "uil", "uil-envelope", "d-block", "rounded", "h3", "mb-0"], ["href", "contact@hidetora.tech", 1, "text-primary"], [1, "uil", "uil-map-marker", "d-block", "rounded", "h3", "mb-0"], ["href", "javascript:void(0);", "data-type", "iframe", 1, "video-play-icon", "text-primary", 3, "click"], ["content", ""], [1, "container", "mt-100", "mt-60"], [1, "row", "align-items-center"], [1, "col-lg-5", "col-md-6", "pt-2", "pt-sm-0", "order-2", "order-md-1"], [1, "card", "shadow", "rounded", "border-0"], [1, "card-body", "py-5"], [1, "card-title"], [1, "custom-form", "mt-3"], ["method", "post", "name", "myForm", "onsubmit", "return validateForm()"], ["id", "error-msg", 1, "mb-0"], ["id", "simple-msg"], [1, "col-md-6"], [1, "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "user", 1, "fea", "icon-sm", "icons"], ["name", "name", "id", "name", "type", "text", "placeholder", "Name :", 1, "form-control", "ps-5"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["name", "email", "id", "email", "type", "email", "placeholder", "Email :", 1, "form-control", "ps-5"], [1, "col-12"], ["name", "book", 1, "fea", "icon-sm", "icons"], ["name", "subject", "id", "subject", "placeholder", "subject :", 1, "form-control", "ps-5"], ["name", "message-circle", 1, "fea", "icon-sm", "icons", "clearfix"], ["name", "comments", "id", "comments", "rows", "4", "placeholder", "Message :", 1, "form-control", "ps-5"], [1, "d-grid"], ["type", "submit", "id", "submit", "name", "send", 1, "btn", "btn-primary"], [1, "col-lg-7", "col-md-6", "order-1", "order-md-2"], [1, "card", "border-0"], [1, "card-body", "p-0"], ["src", "assets/images/contact.svg", "alt", "", 1, "img-fluid"], [1, "container-fluid", "mt-100", "mt-60"], [1, "col-12", "p-0"], [1, "card", "map", "border-0"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.857740238645!2d9.713400643402336!3d4.078467137810172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061120c75f656b5%3A0x74ada59824355dae!2sBOCOM%20Akwa%20Nord%2C%20Douala!5e0!3m2!1sfr!2scm!4v1683373974503!5m2!1sfr!2scm", "allowfullscreen", ""], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15918.857740238645!2d9.713400643402336!3d4.078467137810172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1061120c75f656b5%3A0x74ada59824355dae!2sBOCOM%20Akwa%20Nord%2C%20Douala!5e0!3m2!1sfr!2scm!4v1683373974503!5m2!1sfr!2scm", "width", "750", "height", "450", "allowfullscreen", "", "loading", "lazy", "referrerpolicy", "no-referrer-when-downgrade", 2, "border", "0"]],
  template: function PageContactOneComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hi-Tech");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12)(16, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "svg", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "path", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 16)(20, "div", 1)(21, "div", 17)(22, "div", 18)(23, "div", 19)(24, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 22)(27, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Start working with Hidetora that can provide everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+237 691-410-370");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 26)(34, "div", 19)(35, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 22)(38, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Email");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Start working with Hidetora that can provide everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "contact@hidetora.tech");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 26)(45, "div", 19)(46, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "i", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 22)(49, "h5", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Location");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Douala, Bocom ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Akwa Nord");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageContactOneComponent_Template_a_click_55_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](58);
        return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx.mapView(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "View on Google map");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, PageContactOneComponent_ng_template_57_Template, 6, 0, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32)(60, "div", 33)(61, "div", 34)(62, "div", 35)(63, "div", 36)(64, "h4", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Get In Touch !");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 38)(67, "form", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "p", 40)(69, "div", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 17)(71, "div", 42)(72, "div", 43)(73, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Your Name ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "i-feather", 47)(79, "input", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 42)(81, "div", 43)(82, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Your Email ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i-feather", 49)(88, "input", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 51)(90, "div", 43)(91, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Subject");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i-feather", 52)(95, "input", 53);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 51)(97, "div", 43)(98, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Comments ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "*");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "i-feather", 54)(104, "textarea", 55);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 17)(106, "div", 51)(107, "div", 56)(108, "button", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Send Message");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 58)(111, "div", 59)(112, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "img", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 62)(115, "div", 17)(116, "div", 63)(117, "div", 64)(118, "div", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "iframe", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "a", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "i-feather", 67);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](120);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_4__.ScrollToDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm],
  styles: [".dark-modal .modal-content {\n    background-color: #000000;\n    color: white;\n    background: none;\n    border: none;\n}\n\n  .dark-modal .modal-header {\n    border: none\n}\n\n  .dark-modal .close {\n    color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UtY29udGFjdC1vbmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJwYWdlLWNvbnRhY3Qtb25lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXX0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3BhZ2UtY29udGFjdC1vbmUvcGFnZS1jb250YWN0LW9uZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0Esb3NCQUFvc0IiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG46Om5nLWRlZXAgLmRhcmstbW9kYWwgLm1vZGFsLWhlYWRlciB7XG4gICAgYm9yZGVyOiBub25lXG59XG5cbjo6bmctZGVlcCAuZGFyay1tb2RhbCAuY2xvc2Uge1xuICAgIGNvbG9yOiB3aGl0ZTtcbn0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2219:
/*!************************************************************!*\
  !*** ./src/app/core/components/widget/widget.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WidgetComponent": () => (/* binding */ WidgetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nicky-lenaers/ngx-scroll-to */ 7059);
/* harmony import */ var angular_count_to__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-count-to */ 7321);






function WidgetComponent_ng_template_575_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 332)(1, "button", 333);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WidgetComponent_ng_template_575_Template_button_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4);
      const modal_r2 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](modal_r2.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 334);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 335);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "iframe", 336);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
/**
 * Widget Component
 */
class WidgetComponent {
  constructor(modalService) {
    this.modalService = modalService;
  }
  ngOnInit() {}
  mapView(content) {
    this.modalService.open(content, {
      windowClass: 'dark-modal',
      size: 'lg',
      centered: true
    });
  }
}
WidgetComponent.ɵfac = function WidgetComponent_Factory(t) {
  return new (t || WidgetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
WidgetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: WidgetComponent,
  selectors: [["app-widget"]],
  decls: 806,
  vars: 4,
  consts: [["id", "home", 1, "bg-half", "bg-light", "d-table", "w-100"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-lg-12", "text-center"], [1, "page-next-level"], [1, "title"], [1, "page-next"], ["aria-label", "breadcrumb", 1, "d-inline-block"], [1, "breadcrumb", "bg-white", "rounded", "shadow", "mb-0"], [1, "breadcrumb-item"], ["routerLink", "/index"], ["href", "javascript:void(0)"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "position-relative"], [1, "shape", "overflow-hidden", "text-white"], ["viewBox", "0 0 2880 48", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z", "fill", "currentColor"], [1, "section"], [1, "row"], [1, "col-12"], [1, "section-title"], [1, "col-lg-4", "col-md-6", "col-12", "mt-4", "pt-2"], [1, "features"], [1, "image", "position-relative", "d-inline-block"], [1, "uil", "uil-airplay", "h1", "text-primary"], [1, "content", "mt-4"], [1, "text-muted", "mb-0"], [1, "d-flex", "features", "pt-4", "pb-4"], [1, "icon", "text-center", "rounded-circle", "text-primary", "me-3", "mt-2"], ["name", "monitor", 1, "fea", "icon-ex-md"], [1, "flex-1"], [1, "text-muted", "para", "mb-0"], [1, "card", "work-process", "border-0", "rounded", "shadow"], [1, "card-body"], [1, "text-muted", "para"], ["href", "javascript:void(0)", 1, "text-primary"], [1, "uil", "uil-angle-right-b"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0", "mt-2"], [1, "step", "h1", "mb-0", "fw-bold"], [1, "step-icon"], [1, "mdi", "mdi-check-all", "mdi-36px"], [1, "card", "border-0", "text-center", "features", "feature-clean", "course-feature", "p-4", "overflow-hidden", "shadow"], [1, "icons", "text-primary", "text-center", "mx-auto"], [1, "uil", "uil-file", "d-block", "rounded", "h3", "mb-0"], [1, "card-body", "p-0", "mt-4"], ["href", "javascript:void(0)", 1, "title", "h5", "text-dark"], [1, "text-muted", "mt-2"], ["href", "javascript:void(0)", 1, "text-primary", "read-more"], [1, "uil", "uil-file", "text-primary", "full-img"], [1, "card", "bg-light", "rounded", "shadow", "border-0"], [1, "card-body", "py-5"], [1, "uil", "uil-rupee-sign", "h1", "text-primary"], [1, "mt-4"], [1, "card-title"], [1, "text-muted", "mt-3", "mb-0"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "border-0", "text-center", "features", "feature-clean"], [1, "uil", "uil-phone", "d-block", "rounded", "h3", "mb-0"], [1, "content", "mt-3"], [1, "fw-bold"], [1, "text-muted"], ["href", "tel:+152534-468-854", 1, "text-primary"], [1, "card", "explore-feature", "border-0", "rounded", "text-center", "bg-white", "shadow"], [1, "icon", "rounded-circle", "shadow-lg", "d-inline-block"], ["name", "pen-tool", 1, "fea"], [1, "mt-3", "title"], [1, "uil", "uil-envelope-lock", "d-block", "rounded", "h3", "mb-0"], [1, "mt-2"], ["name", "arrow-right", 1, "fea", "icon-sm"], [1, "d-flex", "features", "feature-clean"], [1, "uil", "uil-airplay", "d-block", "rounded", "h3", "mb-0"], [1, "content", "ms-4"], [1, "mb-1"], ["href", "javascript:void(0)", 1, "text-dark"], [1, "card", "explore-feature", "border-0", "rounded", "text-center", "bg-white"], ["name", "monitor", 1, "fea"], ["href", "javascript:void(0)", 1, "title", "text-dark"], ["href", "javascript:void(0)", 1, "text-muted", "small"], [1, "card", "features", "fea-primary", "rounded", "p-4", "bg-light", "position-relative", "overflow-hidden", "border-0"], [1, "h1", "icon2", "text-primary"], [1, "uil", "uil-briefcase"], [1, "card-body", "p-0", "content"], [1, "para", "text-muted", "mb-0"], [1, "col-12", "mt-4", "pt-2"], [1, "d-flex", "client-testi"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "avatar", "avatar-small", "client-image", "rounded", "shadow"], [1, "flex-1", "content", "p-3", "shadow", "rounded", "bg-white", "position-relative"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item"], [1, "mdi", "mdi-star", "text-warning"], [1, "text-primary"], [1, "card", "client-testi", "text-center", "border", "rounded", "mx-2"], ["src", "assets/images/client/lenovo.svg", "alt", "", 1, "img-fluid", "avatar", "avatar-ex-sm", "mx-auto"], [1, "text-muted", "mt-4"], [1, "card", "client-testi", "m-2", "text-center", "rounded", "shadow", "border-0"], [1, "text-muted", "h6", "fst-italic"], ["src", "assets/images/client/05.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "mt-3", "rounded-circle", "mx-auto", "shadow"], [1, "list-unstyled", "mb-0", "mt-3"], [1, "card", "client-testi", "border-0", "text-center"], ["src", "assets/images/client/04.jpg", "alt", "", 1, "img-fluid", "avatar", "avatar-small", "rounded-circle", "mx-auto", "shadow"], [1, "col-lg-8", "col-12", "mt-4"], [1, "card", "rounded", "bg-light", "overflow-hidden", "border-0", "m-2"], [1, "row", "align-items-center", "g-0"], [1, "col-md-5"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "img-fluid"], [1, "col-md-7"], [1, "card-body", "client-testi"], [1, "text-primary", "fw-bold"], [1, "text-muted", "d-block"], [1, "text-muted", "h6", "mb-0", "fst-italic"], [1, "card", "blog", "rounded", "border-0", "shadow"], ["src", "assets/images/blog/01.jpg", "alt", "...", 1, "card-img-top", "rounded-top"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b", "align-middle"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"], [1, "card", "courses-desc", "overflow-hidden", "rounded", "shadow", "border-0"], [1, "position-relative", "d-block", "overflow-hidden"], ["src", "assets/images/course/1.jpg", "alt", "", 1, "img-fluid", "rounded-top", "mx-auto"], [1, "overlay-work", "bg-dark"], ["href", "javascript:void(0)", 1, "text-white", "h6", "preview"], [1, "rating"], [1, "mdi", "mdi-star", "h5", "mb-0", "text-warning"], [1, "uil", "uil-user", "text-muted"], [1, "fees", "d-flex", "justify-content-between"], [1, "list-unstyled", "mb-0", "numbers"], [1, "mdi", "mdi-school", "text-muted"], [1, "mdi", "mdi-book", "text-muted"], [1, "h6"], [1, "card", "blog", "rounded", "border-0", "shadow", "overflow-hidden"], ["src", "assets/images/course/1.jpg", "alt", "...", 1, "card-img-top"], [1, "overlay", "bg-dark"], [1, "teacher", "d-flex", "align-items-center"], ["src", "assets/images/client/01.jpg", "alt", "", 1, "avatar", "avatar-md-sm", "rounded-circle", "shadow"], [1, "ms-2"], [1, "mb-0"], ["href", "javascript:void(0)", 1, "text-light", "user"], [1, "text-light", "small", "my-0"], [1, "course-fee", "bg-white", "text-center", "shadow-lg", "rounded-circle"], [1, "text-primary", "fw-bold", "fee"], ["href", "javascript:void(0)", 1, "text-primary", "h6"], [1, "list-unstyled", "d-flex", "justify-content-between", "border-top", "mt-3", "pt-3", "mb-0"], [1, "text-muted", "small"], ["name", "book", 1, "fea", "icon-sm", "text-info"], [1, "text-muted", "small", "ms-3"], ["name", "clock", 1, "fea", "icon-sm", "text-warning"], ["name", "eye", 1, "fea", "icon-sm", "text-primary"], [1, "col-lg-6", "col-12", "mt-4", "pt-2"], [1, "col-md-6", "order-2", "order-md-1"], [1, "col-md-6", "order-1", "order-md-2"], ["src", "assets/images/work/15.jpg", "alt", "", 1, "img-fluid"], [1, "card", "shop-list", "border-0", "position-relative"], [1, "label", "list-unstyled", "mb-0"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-primary"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-success"], ["href", "javascript:void(0)", 1, "badge", "badge-link", "rounded-pill", "bg-warning"], [1, "shop-image", "position-relative", "overflow-hidden", "rounded", "shadow"], ["routerLink", "/shop-product-detail"], ["src", "assets/images/shop/product/s1.jpg", "alt", "", 1, "img-fluid"], ["routerLink", "/shop-product-detail", 1, "overlay-work"], ["src", "assets/images/shop/product/s-1.jpg", "alt", "", 1, "img-fluid"], [1, "list-unstyled", "shop-icons"], ["href", "javascript:void(0)", 1, "btn", "btn-icon", "btn-pills", "btn-soft-danger"], ["name", "heart", 1, "icons"], ["href", "javascript:void(0)", "data-bs-toggle", "modal", "data-bs-target", "#productview", 1, "btn", "btn-icon", "btn-pills", "btn-soft-primary"], ["name", "eye", 1, "icons"], ["routerLink", "/shop-cart", 1, "btn", "btn-icon", "btn-pills", "btn-soft-warning"], ["name", "shopping-cart", 1, "icons"], [1, "card-body", "content", "pt-4", "p-2"], ["routerLink", "/shop-product-detail", 1, "text-dark", "product-name", "h6"], [1, "d-flex", "justify-content-between", "mt-1"], [1, "text-muted", "small", "fst-italic", "mb-0", "mt-1"], [1, "text-success", "ms-1"], [1, "list-unstyled", "text-warning", "mb-0"], [1, "mdi", "mdi-star"], [1, "card", "border-0", "work-container", "work-classic"], [1, "card-body", "p-0"], ["src", "assets/images/work/2.jpg", "alt", "", 1, "img-fluid", "rounded", "work-image"], [1, "content", "pt-3"], ["href", "javascript:void(0)", 1, "text-dark", "title"], [1, "text-muted", "tag", "mb-0"], [1, "card", "border-0", "work-container", "work-grid", "position-relative", "d-block", "overflow-hidden", "rounded"], ["href", "assets/images/work/11.jpg", "title", "", 1, "lightbox", "d-inline-block"], ["src", "assets/images/work/11.jpg", "alt", "work-image", 1, "img-fluid"], [1, "content", "bg-white", "p-3"], ["routerLink", "/portfolio-detail-one", 1, "text-dark", "title"], [1, "card", "work-container", "work-modern", "position-relative", "overflow-hidden", "shadow", "rounded", "border-0"], ["src", "assets/images/work/3.jpg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "content"], ["href", "javascript:void(0)", 1, "title", "text-white", "d-block", "fw-bold"], [1, "text-light"], [1, "client"], [1, "muil", "uil-calendar-alt"], [1, "card", "border-0", "work-container", "work-modern", "position-relative", "d-block", "overflow-hidden", "rounded"], [1, "portfolio-box-img", "position-relative", "overflow-hidden"], ["src", "assets/images/personal/6.jpg", "alt", "1", 1, "item-container", "img-fluid", "mx-auto"], ["routerLink", "/portfolio-detail-one", 1, "text-white", "title"], [1, "text-light", "tag", "mb-0"], [1, "icons", "text-center"], ["href", "javascript:void(0);", 1, "text-primary", "work-icon", "bg-white", "d-inline-block", "rounded-pill"], ["name", "camera", 1, "fea", "icon-sm", "image-icon"], [1, "card", "work-container", "work-modern", "rounded", "border-0", "overflow-hidden"], ["src", "assets/images/hotel/01.jpg", "alt", "work-image", 1, "img-fluid", "rounded"], [1, "overlay-work"], ["href", "javascript:void(0)", 1, "title", "text-white", "pb-2", "border-bottom"], [1, "post-meta", "mb-0", "mt-2", "text-white", "list-unstyled"], [1, "list-inline-item", "me-3"], [1, "mdi", "mdi-bed-empty", "mdi-24px", "me-2"], [1, "mdi", "mdi-scale-bathroom", "mdi-24px", "me-2"], [1, "text-white", "d-block", "mb-0"], [1, "text-success"], [1, "read_more", "bg-primary", "text-center", "rounded-circle"], ["href", "javascript:void(0)", 1, "text-light", "d-block"], ["name", "chevron-right", 1, "fea", "icon-sm", "title-dark"], [1, "card", "work-container", "work-modern", "overflow-hidden", "rounded", "border-0", "shadow-lg"], ["src", "assets/images/course/online/ab02.jpg", "alt", "work-image", 1, "img-fluid"], [1, "card", "categories", "overflow-hidden", "rounded", "shadow", "border-0"], ["src", "assets/images/work/5.jpg", "alt", "", 1, "img-fluid"], [1, "list-unstyled", "d-flex", "justify-content-between", "mb-0"], ["href", "javascript:void(0)", 1, "title", "h6", "text-dark"], [1, "h6", "mb-0", "jobs"], [1, "card", "job-box", "rounded", "shadow", "border-0", "overflow-hidden"], [1, "border-bottom"], ["src", "assets/images/job/remote.jpg", "alt", "", 1, "img-fluid"], [1, "job-overlay", "bg-white"], [1, "mb-0", "position"], ["routerLink", "/page-job-detail", 1, "text-dark", "h5"], [1, "list-unstyled", "h6", "mb-0", "text-warning"], [1, "list-inline-item", "mb-0"], [1, "list-unstyled", "head", "mb-0"], [1, "badge", "bg-danger", "rounded-pill"], [1, "card-body", "content", "position-relative"], [1, "firm-logo", "rounded-circle", "shadow", "bg-light", "text-center"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-md-sm"], [1, "company-detail", "text-center", "mt-3"], ["routerLink", "/page-job-company", 1, "text-dark", "company-name"], ["data-type", "iframe", 1, "video-play-icon", "text-muted", 3, "click"], ["name", "map-pin", 1, "fea", "icon-sm"], ["content", ""], [1, "job-facts", "list-unstyled"], [1, "list-inline-item", "text-muted"], ["name", "check", 1, "fea", "icon-sm", "text-success", "me-1"], [1, "d-grid"], ["routerLink", "/page-job-detail", 1, "btn", "btn-outline-primary"], [1, "candidate-list", "card", "rounded", "border-0", "shadow"], [1, "list-unstyled", "align-items-center"], [1, "list-inline-item", "float-end"], [1, "mdi", "mdi-heart", "h5", "mb-0"], [1, "badge", "rounded-pill", "bg-soft-success"], [1, "content", "text-center"], ["src", "assets/images/client/02.jpg", "alt", "", 1, "avatar", "avatar-md-md", "shadow-md", "rounded-circle"], [1, "list-unstyled", "mb-1", "mt-2"], ["routerLink", "/page-job-candidate", 1, "text-dark", "h5", "name"], [1, "text-muted", "my-1"], [1, "uil", "uil-graduation-cap", "h4", "mb-0", "me-2", "text-primary"], [1, "list-unstyled", "mt-3"], [1, "list-inline-item", "m-1"], ["href", "jvascript:void(0)", 1, "rounded", "bg-light", "py-1", "px-2", "text-muted", "small"], ["routerLink", "/page-job-candidate", 1, "btn", "btn-soft-primary"], [1, "company-list", "card", "border-0", "rounded", "shadow", "bg-white"], [1, "text-center", "py-5", "border-bottom"], ["src", "assets/images/job/Circleci.svg", "alt", "", 1, "avatar", "avatar-small", "mx-auto", "rounded-circle", "d-block", "mb-3"], ["routerLink", "page-job-company", 1, "text-dark", "h5", "name"], [1, "text-muted", "mt-1", "mb-0"], [1, "p-4"], [1, "list-unstyled", "mb-4"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-map-pin", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"], ["cx", "12", "cy", "10", "r", "3"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-link", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"], ["d", "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-dollar-sign", "fea", "icon-sm", "text-warning", "me-2"], ["x1", "12", "y1", "1", "x2", "12", "y2", "23"], ["d", "M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"], ["xmlns", "http://www.w3.org/2000/svg", "width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2", "stroke-linecap", "round", "stroke-linejoin", "round", 1, "feather", "feather-users", "fea", "icon-sm", "text-warning", "me-2"], ["d", "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"], ["cx", "9", "cy", "7", "r", "4"], ["d", "M23 21v-2a4 4 0 0 0-3-3.87"], ["d", "M16 3.13a4 4 0 0 1 0 7.75"], ["routerLink", "/page-job-company", 1, "btn", "btn-soft-primary"], [1, "card", "pricing-rates", "business-rate", "shadow", "bg-light", "rounded", "text-center", "border-0"], [1, "title", "fw-bold", "text-uppercase", "text-primary", "mb-4"], [1, "d-flex", "justify-content-center", "mb-4"], [1, "h4", "mb-0", "mt-2"], [1, "price", "h1", "mb-0"], [1, "h4", "align-self-end", "mb-1"], [1, "list-unstyled", "mb-0", "ps-0"], [1, "h6", "text-muted", "mb-0"], [1, "text-primary", "h5", "me-2"], [1, "uil", "uil-check-circle", "align-middle"], ["href", "javascript:void(0)", 1, "btn", "btn-primary", "mt-4"], [1, "col-lg-5", "col-md-6", "mt-4", "pt-2"], [1, "card", "rounded", "shadow", "bg-light", "border-0"], ["src", "assets/images/payments/payment/master.png", "height", "60", "alt", "", 1, "text-end"], [1, ""], [1, "d-flex", "justify-content-between"], [1, "col-lg-3", "col-md-6", "col-12", "mt-4", "pt-2"], ["id", "counter", 1, "row"], [1, "card", "counter-box", "border-0", "bg-primary", "shadow", "text-center", "rounded"], [1, "mb-0", "text-light", "title-dark"], [1, "counter-value", 3, "CountTo", "from", "duration"], [1, "counter-head", "text-light", "title-dark", "mb-0"], [1, "col-lg-5", "mt-4", "pt-2"], [1, "card", "event-schedule", "rounded", "border"], [1, "d-flex"], [1, "date", "text-center", "text-primary", "me-3", "mb-0", "list-unstyled"], [1, "day", "fw-bold", "mb-2"], [1, "month", "fw-bold"], [1, "flex-1", "content"], [1, "text-muted", "location-time"], [1, "text-dark", "h6"], [1, "text-danger"], ["routerLink", "/widget", 1, "btn", "btn-sm", "btn-outline-primary"], [1, "col-md-6", "col-12", "mt-4", "pt-2"], ["name", "help-circle", 1, "fea", "icon-ex-md", "text-primary", "me-2", "mt-1"], [1, "mt-0"], [1, "answer", "text-muted", "mb-0"], ["href", "javascript: void(0);", "id", "back-to-top", 1, "btn", "btn-icon", "btn-primary", "back-to-top", 3, "ngxScrollTo"], ["name", "arrow-up", 1, "icons"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin", "height", "450", "width", "750"]],
  template: function WidgetComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Widget ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6)(8, "nav", 7)(9, "ul", 8)(10, "li", 9)(11, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 9)(14, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Docs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "li", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 13)(19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "section", 17)(23, "div", 1)(24, "div", 18)(25, "div", 19)(26, "div", 20)(27, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Features Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 21)(30, "div", 22)(31, "div", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "i", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 25)(34, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Easy To Use");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Nisi aenean vulputate eleifend tellus vitae eleifend enim a Aliquam eleifend aenean elementum semper.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 21)(39, "div", 27)(40, "div", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](41, "i-feather", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 30)(43, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Use On Any Device");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "p", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 21)(48, "div", 32)(49, "div", 33)(50, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "Final Approvement");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Read more ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](56, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "ul", 37)(58, "li", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](59, "Step 03.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "li", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](61, "i", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](62, "div", 21)(63, "div", 41)(64, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](65, "i", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 44)(67, "a", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, " Unlimited Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](70, "It is a long established fact that a reader will be of a page reader will be of a page when looking at its layout. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "a", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "i", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 21)(76, "div", 49)(77, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](78, "i", 51);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "div", 52)(80, "h5", 53)(81, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, " Low Fees");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](83, "p", 54);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](84, "If the distribution of letters and 'words' is random, the reader will not be distracted.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 55)(86, "div", 56)(87, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](88, "i", 57);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "div", 58)(90, "h5", 59);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Phone");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](92, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](93, "Start working with Landrick that can provide everything");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "a", 61);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](95, "+152 534-468-854");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 55)(97, "div", 62)(98, "div", 33)(99, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](100, "i-feather", 64);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "h5", 65);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](102, "Perfect Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Dummy text is text that is used in the publishing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "div", 21)(106, "div", 56)(107, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](108, "i", 66);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "div", 44)(110, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](111, "Fully Secured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](113, "Composed in a pseudo-Latin language which more or less pseudo-Latin language corresponds.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 67)(115, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](117, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 21)(119, "div", 69)(120, "div", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](121, "i", 70);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](122, "div", 71)(123, "h5", 72)(124, "a", 73);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](125, "Learners");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, "This is required when, for text is not yet available.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "div", 21)(129, "div", 74)(130, "div", 50)(131, "div", 63);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](132, "i-feather", 75);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 58)(134, "h5")(135, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](136, "IT & Software");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "a", 77);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](138, "Learn More");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 21)(140, "div", 78)(141, "span", 79);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](142, "i", 80);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "div", 81)(144, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](145, "Our Vision");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "p", 82);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "It is a long established fact that a reader will be of a page reader will be of at its layout.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](148, "div", 18)(149, "div", 83)(150, "div", 20)(151, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](152, "Testimonial Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 21)(154, "div", 84);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](155, "img", 85);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "div", 86)(157, "ul", 87)(158, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](159, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](161, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](163, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](165, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](167, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "p", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](169, "\" According to most sources, Lorum Ipsum can be traced back to a text composed by Cicero. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](170, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](171, "- Christa Smith ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "small", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](173, "Manager");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 21)(175, "div", 91)(176, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](177, "img", 92);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](179, "\" One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "- Barbara McIntosh");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 21)(183, "div", 94)(184, "div", 33)(185, "p", 95);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](186, "\" It seems that only fragments of the oem Ipsum', which is said to have originated in the 16th century. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](187, "img", 96);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "ul", 97)(189, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](190, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](191, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](192, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](193, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](194, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](196, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](197, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](198, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](200, "- Dean Tolle ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](201, "small", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](202, "Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](203, "div", 21)(204, "div", 98)(205, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](206, "img", 99);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](207, "p", 93);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](208, "\" Thus, Lorem Ipsum has only limited suitability as a visual filler for German texts. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](209, "h6", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](210, "- Jill Webb");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](211, "div", 100)(212, "div", 101)(213, "div", 102)(214, "div", 103);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](215, "img", 104);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](216, "div", 105)(217, "div", 106)(218, "h6", 107);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](219, "Barbara McIntosh ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](220, "small", 108);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](221, "User");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](222, "ul", 87)(223, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](224, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](225, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](226, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](227, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](228, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](229, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](230, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](231, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](232, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](233, "p", 109);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](234, "\" This seems that only fragments of the original text remain in the Ipsum texts used today. The well known have originated in the 16th century. \"");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](235, "div", 18)(236, "div", 83)(237, "div", 20)(238, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](239, "Blog Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](240, "div", 21)(241, "div", 110)(242, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](243, "img", 111)(244, "div", 112);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](245, "div", 113)(246, "h5")(247, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](248, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](249, "div", 115)(250, "ul", 87)(251, "li", 116)(252, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](253, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](254, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](255, "li", 88)(256, "a", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](257, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](258, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](259, "a", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](260, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](261, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](262, "div", 123)(263, "small", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](264, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](265, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](266, "small", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](267, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](268, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](269, "div", 21)(270, "div", 128)(271, "div", 129);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](272, "img", 130)(273, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](274, "a", 132);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](275, "Preview Now ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](276, "i", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](277, "div", 33)(278, "h5")(279, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](280, "Program for Missionaries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](281, "div", 133)(282, "ul", 87)(283, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](284, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](285, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](286, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](287, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](288, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](289, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](290, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](291, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](292, "i", 134);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](293, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](294, "5 Star (3");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](295, "i", 135);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](296, ")");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](297, "div", 136)(298, "ul", 137)(299, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](300, "i", 138);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](301, " 30 Students");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](302, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](303, "i", 139);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](304, " 5 Lession");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](305, "h4")(306, "span", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](307, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](308, "75");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](309, "div", 21)(310, "div", 141)(311, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](312, "img", 142)(313, "div", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](314, "div", 144);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](315, "img", 145);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](316, "div", 146)(317, "h6", 147)(318, "a", 148);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](319, "Dung Lewis");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](320, "p", 149);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](321, "Professor");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](322, "div", 150)(323, "h6", 151);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](324, "$11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](325, "div", 13)(326, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](327, "svg", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](328, "path", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](329, "div", 113)(330, "small")(331, "a", 152);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](332, "Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](333, "h5", 67)(334, "a", 76);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](335, "Program for Missionaries");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](336, "p", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](337, "The most well-known dummy text is the have originated in the 16th century.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](338, "a", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](339, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](340, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](341, "ul", 153)(342, "li", 154);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](343, "i-feather", 155);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](344, " 25 Lectures ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](345, "li", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](346, "i-feather", 157);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](347, " 1h 30m ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](348, "li", 156);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](349, "i-feather", 158);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](350, " 3012 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](351, "div", 159)(352, "div", 141)(353, "div", 102)(354, "div", 160)(355, "div", 113)(356, "h5")(357, "a", 114);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](358, "Design your apps in your own way");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](359, "p", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](360, "Due to its widespread use as filler text for layouts, non-readability");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](361, "div", 115)(362, "ul", 87)(363, "li", 116)(364, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](365, "i", 118);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](366, "33");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](367, "li", 88)(368, "a", 119);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](369, "i", 120);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](370, "08");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](371, "a", 121);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](372, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](373, "i", 122);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](374, "div", 161);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](375, "img", 162)(376, "div", 143);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](377, "div", 123)(378, "small", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](379, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](380, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](381, "small", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](382, "i", 127);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](383, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](384, "div", 18)(385, "div", 83)(386, "div", 20)(387, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](388, "Shop Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](389, "div", 21)(390, "div", 163)(391, "ul", 164)(392, "li")(393, "a", 165);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](394, "New");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](395, "li")(396, "a", 166);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](397, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](398, "li")(399, "a", 167);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](400, "Sale");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](401, "div", 168)(402, "a", 169);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](403, "img", 170);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](404, "a", 171);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](405, "img", 172);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](406, "ul", 173)(407, "li")(408, "a", 174);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](409, "i-feather", 175);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](410, "li", 67)(411, "a", 176);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](412, "i-feather", 177);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](413, "li", 67)(414, "a", 178);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](415, "i-feather", 179);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](416, "div", 180)(417, "a", 181);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](418, "T-Shirts");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](419, "div", 182)(420, "h6", 183);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](421, "$5.00 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](422, "span", 184);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](423, "30% off");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](424, "ul", 185)(425, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](426, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](427, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](428, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](429, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](430, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](431, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](432, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](433, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](434, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](435, "div", 18)(436, "div", 83)(437, "div", 20)(438, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](439, "Work, Project & Portfolio Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](440, "div", 21)(441, "div", 187)(442, "div", 188)(443, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](444, "img", 189);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](445, "div", 190)(446, "h5", 147)(447, "a", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](448, "Iphone mockup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](449, "h6", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](450, "Branding");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](451, "div", 21)(452, "div", 193)(453, "div", 188)(454, "a", 194);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](455, "img", 195);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](456, "div", 196)(457, "h5", 147)(458, "a", 197);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](459, "Black and white T-shirt");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](460, "h6", 192);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](461, "Clothes");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](462, "div", 21)(463, "div", 198)(464, "div", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](465, "img", 199)(466, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](467, "div", 200)(468, "a", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](469, "Spa Cosmetics");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](470, "small", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](471, "Developing");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](472, "div", 203)(473, "small", 124);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](474, "i", 125);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](475, " Calvin Carlo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](476, "small", 126);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](477, "i", 204);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](478, " 13th August, 2019");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](479, "div", 21)(480, "div", 205)(481, "div", 206);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](482, "img", 207)(483, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](484, "div", 200)(485, "h5", 147)(486, "a", 208);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](487, "Mockup box with paints");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](488, "h6", 209);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](489, "Photography");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](490, "div", 210)(491, "a", 211);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](492, "i-feather", 212);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](493, "div", 55)(494, "div", 213)(495, "div", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](496, "img", 214)(497, "div", 215);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](498, "div", 200)(499, "a", 216);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](500, "Regular Room");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](501, "ul", 217)(502, "li", 218);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](503, "i", 219);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](504, "1 Bed");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](505, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](506, "i", 220);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](507, "1 Bathrooms");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](508, "p", 221);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](509, "Rent ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](510, "span", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](511, "$350");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](512, " /Night");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](513, "div", 223)(514, "a", 224);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](515, "i-feather", 225);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](516, "div", 55)(517, "div", 226)(518, "div", 188);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](519, "img", 227)(520, "div", 131);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](521, "div", 200)(522, "a", 201);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](523, "Michanical Engineer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](524, "small", 202);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](525, "Engineering");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](526, "div", 18)(527, "div", 83)(528, "div", 20)(529, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](530, "Job Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](531, "div", 55)(532, "div", 228);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](533, "img", 229);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](534, "div", 33)(535, "ul", 230)(536, "li")(537, "a", 231);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](538, "Communications");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](539, "li", 232);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](540, "125 Jobs");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](541, "div", 21)(542, "div", 233)(543, "div", 234)(544, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](545, "img", 235)(546, "div", 236);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](547, "div", 237)(548, "a", 238);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](549, "Python Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](550, "ul", 239)(551, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](552, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](553, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](554, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](555, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](556, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](557, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](558, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](559, "li", 240);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](560, "i", 186);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](561, "ul", 241)(562, "li", 242);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](563, "Remote");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](564, "div", 243)(565, "div", 244);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](566, "img", 245);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](567, "div", 246)(568, "h5", 147)(569, "a", 247);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](570, "CircleCi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](571, "p", 60)(572, "a", 248);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function WidgetComponent_Template_a_click_572_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r5);
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](576);
        return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx.mapView(_r0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](573, "i-feather", 249);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](574, " San Francisco ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](575, WidgetComponent_ng_template_575_Template, 6, 0, "ng-template", null, 250, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](577, "ul", 251)(578, "li", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](579, "i-feather", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](580, " 2 Year Expirence ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](581, "li", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](582, "i-feather", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](583, " Working Hours- 6hr ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](584, "li", 252);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](585, "i-feather", 253);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](586, " Information strategy ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](587, "div", 254)(588, "a", 255);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](589, "Apply Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](590, "div", 21)(591, "div", 256)(592, "div", 33)(593, "ul", 257)(594, "li", 258)(595, "a", 117);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](596, "i", 259);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](597, "li", 88)(598, "span", 260);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](599, "Featured");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](600, "div", 261);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](601, "img", 262);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](602, "ul", 263)(603, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](604, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](605, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](606, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](607, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](608, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](609, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](610, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](611, "li", 88);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](612, "i", 89);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](613, "a", 264);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](614, "Martha Griffin");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](615, "p", 265);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](616, "WordPress Developer");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](617, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](618, "i", 266);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](619, "Experience ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](620, "span", 222);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](621, "3+ years");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](622, "ul", 267)(623, "li", 268)(624, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](625, "PHP");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](626, "li", 268)(627, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](628, "WordPress");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](629, "li", 268)(630, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](631, "Web Design");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](632, "li", 268)(633, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](634, "CSS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](635, "li", 268)(636, "a", 269);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](637, "JS");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](638, "div", 254)(639, "a", 270);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](640, "Read More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](641, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](642, "div", 21)(643, "div", 271)(644, "div", 272);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](645, "img", 273);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](646, "a", 274);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](647, "CircleCi");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](648, "p", 275);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](649, "Internet Services");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](650, "div", 276)(651, "h5");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](652, "Company Details :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](653, "ul", 277)(654, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](655, "svg", 278);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](656, "path", 279)(657, "circle", 280);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](658, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](659, "Location :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](660, " San Francisco");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](661, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](662, "svg", 281);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](663, "path", 282)(664, "path", 283);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](665, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](666, "Comapny :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](667, " circleci.com");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](668, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](669, "svg", 284);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](670, "line", 285)(671, "path", 286);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](672, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](673, "Revenue :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](674, " $ 5M / Annual");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](675, "li", 140);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceSVG"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](676, "svg", 287);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](677, "path", 288)(678, "circle", 289)(679, "path", 290)(680, "path", 291);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnamespaceHTML"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](681, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](682, "No. of employees :");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](683, " 200");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](684, "div", 254)(685, "a", 292);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](686, "View Detail ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](687, "i-feather", 68);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](688, "div", 18)(689, "div", 83)(690, "div", 20)(691, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](692, "Price Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](693, "div", 21)(694, "div", 293)(695, "div", 50)(696, "h6", 294);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](697, "Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](698, "div", 295)(699, "span", 296);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](700, "$");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](701, "span", 297);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](702, "0");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](703, "span", 298);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](704, "/mo");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](705, "ul", 299)(706, "li", 300)(707, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](708, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](709, "Full Access");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](710, "li", 300)(711, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](712, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](713, "Enhanced Security");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](714, "li", 300)(715, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](716, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](717, "Source Files");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](718, "li", 300)(719, "span", 301);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](720, "i", 302);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](721, "1 Domain Free");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](722, "a", 303);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](723, "Buy Now");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](724, "div", 18)(725, "div", 83)(726, "div", 20)(727, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](728, "Payment Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](729, "div", 304)(730, "div", 305)(731, "div", 50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](732, "img", 306);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](733, "div", 52)(734, "h5", 307);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](735, "\u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 \u2022\u2022\u2022\u2022 4559");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](736, "div", 308)(737, "p", 300);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](738, "Cristino Murfy");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](739, "h6", 147);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](740, "Exp: ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](741, "span", 60);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](742, "10/22");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](743, "div", 18)(744, "div", 83)(745, "div", 20)(746, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](747, "Counter Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](748, "div", 309)(749, "div", 310)(750, "div", 19)(751, "div", 311)(752, "div", 50)(753, "h2", 312);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](754, "span", 313);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](755, "%");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](756, "h5", 314);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](757, "Happy Client");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](758, "div", 18)(759, "div", 83)(760, "div", 20)(761, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](762, "Event Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](763, "div", 315)(764, "div", 316)(765, "div", 33)(766, "div", 317)(767, "ul", 318)(768, "li", 319);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](769, "11");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](770, "li", 320);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](771, "OCT");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](772, "div", 321)(773, "h4")(774, "a", 191);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](775, "Digital Conference Event Intro");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](776, "p", 322)(777, "span", 323);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](778, "Address:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](779, " Hall 3, Sinchang-dong, Kwangju, ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](780, "span", 324);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](781, "South Korea");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](782, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](783, "span", 323);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](784, "Time:");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](785, " 10:30AM to 11:15AM");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](786, "a", 325);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](787, "Buy Ticket");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](788, "div", 18)(789, "div", 83)(790, "div", 20)(791, "h4");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](792, "FAQs Widget");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](793, "div", 326)(794, "div", 317);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](795, "i-feather", 327);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](796, "div", 30)(797, "h5", 328);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](798, "How our ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](799, "span", 90);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](800, "Landrick");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](801, " work ?");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](802, "p", 329);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](803, "Due to its widespread use as filler text for layouts, non-readability is of great importance: human perception is tuned to recognize certain patterns and repetitions in texts.");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](804, "a", 330);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](805, "i-feather", 331);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](754);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("CountTo", 97)("from", 3)("duration", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngxScrollTo", "#home");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_4__.FeatherComponent, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_5__.ScrollToDirective, angular_count_to__WEBPACK_IMPORTED_MODULE_0__.CountToDirective],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aWRnZXQuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29yZS9jb21wb25lbnRzL3dpZGdldC93aWRnZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 80:
/*!************************************************************!*\
  !*** ./src/app/email/email-alert/email-alert.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailAlertComponent": () => (/* binding */ EmailAlertComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Alert Component
 */
class EmailAlertComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailAlertComponent.ɵfac = function EmailAlertComponent_Factory(t) {
  return new (t || EmailAlertComponent)();
};
EmailAlertComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EmailAlertComponent,
  selectors: [["app-email-alert"]],
  decls: 36,
  vars: 1,
  consts: [[2, "margin-top", "50px"], ["cellpadding", "0", "cellspacing", "0", 2, "font-family", "Nunito, sans-serif", "font-size", "15px", "font-weight", "400", "max-width", "600px", "border", "none", "margin", "0 auto", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "font-weight", "700", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "24px 24px"], [2, "padding", "8px", "color", "#e43f52", "background-color", "rgba(228, 63, 82, 0.2)", "border", "1px solid rgba(228, 63, 82, 0.2)", "border-radius", "6px", "text-align", "center", "font-size", "16px", "font-weight", "600"], [2, "padding", "0 24px 15px", "color", "#8492a6"], [2, "color", "#fff", "background-color", "#e43f52", "padding", "4px 8px", "border-radius", "6px"], [2, "padding", "15px 24px"], ["href", "javascript:void(0)", 2, "padding", "8px 20px", "outline", "none", "text-decoration", "none", "font-size", "16px", "letter-spacing", "0.5px", "transition", "all 0.3s", "font-weight", "600", "border-radius", "6px", "background-color", "#2f55d4", "border", "1px solid #2f55d4", "color", "#ffffff"], [2, "padding", "15px 24px 0", "color", "#8492a6"], [2, "padding", "15px 24px 15px", "color", "#8492a6"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailAlertComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2)(4, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody")(7, "tr")(8, "td", 5)(9, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Warning: You're approaching your limit. Please upgrade. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr")(12, "td", 7)(13, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " You have ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "1 free report");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " remaining. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tr")(19, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Add your credit card / debit card now to upgrade your account to a premium plan to ensure you don't miss out on any reports. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr")(22, "td", 9)(23, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Upgrade Account");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr")(26, "td", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Thanks for choosing Landrick Template. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr")(29, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Landrick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Support Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "tr")(34, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](35);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, " Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1hbGVydC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1haWwvZW1haWwtYWxlcnQvZW1haWwtYWxlcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 8942:
/*!**************************************************************************!*\
  !*** ./src/app/email/email-confirmation/email-confirmation.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailConfirmationComponent": () => (/* binding */ EmailConfirmationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Confirmation Component
 */
class EmailConfirmationComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailConfirmationComponent.ɵfac = function EmailConfirmationComponent_Factory(t) {
  return new (t || EmailConfirmationComponent)();
};
EmailConfirmationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EmailConfirmationComponent,
  selectors: [["app-email-confirmation"]],
  decls: 31,
  vars: 1,
  consts: [[2, "align-items", "center", "padding", "150px 0"], [1, "container"], [1, "row", 2, "justify-content", "center"], [1, "col-lg-6", "col-md-8"], [2, "box-sizing", "border-box", "width", "100%", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "font-weight", "700", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "48px 24px 0", "color", "#161c2d", "font-size", "18px", "font-weight", "600"], [2, "padding", "15px 24px 15px", "color", "#8492a6"], [2, "padding", "15px 24px"], ["href", "javascript:void(0)", 1, "btn-primary", 2, "padding", "8px 20px", "outline", "none", "text-decoration", "none", "font-size", "16px", "letter-spacing", "0.5px", "transition", "all 0.3s", "font-weight", "600", "border-radius", "6px"], [2, "padding", "15px 24px 0", "color", "#8492a6"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailConfirmationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "table", 4)(5, "thead")(6, "tr", 5)(7, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody")(10, "tr")(11, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hello, Harry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr")(14, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Thanks for creating an Landrick account. To continue, please confirm your email address by clicking the button below : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr")(17, "td", 10)(18, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Confirm Email Address");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr")(21, "td", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " This link will be active for 30 min from the time this email was sent. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "tr")(24, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Landrick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Support Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "tr")(29, "td", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, " Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1jb25maXJtYXRpb24uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1haWwvZW1haWwtY29uZmlybWF0aW9uL2VtYWlsLWNvbmZpcm1hdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnTEFBZ0wiLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 9760:
/*!****************************************************************!*\
  !*** ./src/app/email/email-invoice/email-invoice.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailInvoiceComponent": () => (/* binding */ EmailInvoiceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Invoice Component
 */
class EmailInvoiceComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailInvoiceComponent.ɵfac = function EmailInvoiceComponent_Factory(t) {
  return new (t || EmailInvoiceComponent)();
};
EmailInvoiceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EmailInvoiceComponent,
  selectors: [["app-email-invoice"]],
  decls: 73,
  vars: 1,
  consts: [[2, "margin-top", "50px"], ["cellpadding", "0", "cellspacing", "0", 2, "font-family", "Nunito, sans-serif", "font-size", "15px", "font-weight", "400", "max-width", "600px", "border", "none", "margin", "0 auto", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "24px 24px 0"], ["cellpadding", "0", "cellspacing", "0", 2, "border", "none"], [2, "min-width", "130px", "padding-bottom", "8px"], [2, "color", "#8492a6"], [2, "padding", "24px"], [2, "display", "block", "overflow-x", "auto", "-webkit-overflow-scrolling", "touch", "border-radius", "6px", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], ["cellpadding", "0", "cellspacing", "0"], [1, "bg-light"], ["scope", "col", 2, "text-align", "left", "vertical-align", "bottom", "border-top", "1px solid #dee2e6", "padding", "12px"], ["scope", "col", 2, "text-align", "left", "vertical-align", "bottom", "border-top", "1px solid #dee2e6", "padding", "12px", "width", "200px"], ["scope", "col", 2, "text-align", "end", "vertical-align", "bottom", "border-top", "1px solid #dee2e6", "padding", "12px"], ["scope", "row", 2, "text-align", "left", "padding", "12px", "border-top", "1px solid #dee2e6"], [2, "text-align", "left", "padding", "12px", "border-top", "1px solid #dee2e6"], [2, "text-align", "end", "padding", "12px", "border-top", "1px solid #dee2e6"], [2, "background-color", "rgba(47, 85, 212, 0.2)", "color", "#2f55d4", "overflow-x", "hidden"], ["scope", "row", 2, "text-align", "left", "padding", "12px", "border-top", "1px solid rgba(47, 85, 212, 0.2)"], ["colspan", "2", 2, "text-align", "end", "font-weight", "700", "font-size", "18px", "padding", "12px", "border-top", "1px solid rgba(47, 85, 212, 0.2)"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailInvoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2)(4, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody")(7, "tr")(8, "td", 5)(9, "table", 6)(10, "tbody")(11, "tr")(12, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Invoice No. :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "#land45845621");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr")(17, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Harry Patel");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tr")(22, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Address :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "1962 Pike Street, CA 92123");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "tr")(27, "td", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Date :");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "td", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "March, 25 2020");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "tr")(32, "td", 9)(33, "div", 10)(34, "table", 11)(35, "thead", 12)(36, "tr")(37, "th", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " No.");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "th", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Item");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "th", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "tbody")(44, "tr")(45, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "1");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Landrick Template");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "$ 5200 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "tr")(52, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "2");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Customization");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "$ 3660 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "tr")(59, "th", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "3");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "td", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Development");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "td", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "$ 13740 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "tr", 19)(66, "th", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " Total");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "td", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " $ 22600");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "tr")(71, "td", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](72);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, " Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1pbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1haWwvZW1haWwtaW52b2ljZS9lbWFpbC1pbnZvaWNlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLDRLQUE0SyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4065:
/*!******************************************************************************!*\
  !*** ./src/app/email/email-password-reset/email-password-reset.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmailPasswordResetComponent": () => (/* binding */ EmailPasswordResetComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Email Password-Reset Component
 */
class EmailPasswordResetComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
EmailPasswordResetComponent.ɵfac = function EmailPasswordResetComponent_Factory(t) {
  return new (t || EmailPasswordResetComponent)();
};
EmailPasswordResetComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: EmailPasswordResetComponent,
  selectors: [["app-email-password-reset"]],
  decls: 28,
  vars: 1,
  consts: [[2, "margin-top", "50px"], ["cellpadding", "0", "cellspacing", "0", 2, "font-family", "Nunito, sans-serif", "font-size", "15px", "font-weight", "400", "max-width", "600px", "border", "none", "margin", "0 auto", "border-radius", "6px", "overflow", "hidden", "background-color", "#fff", "box-shadow", "0 0 3px rgba(60, 72, 88, 0.15)"], [2, "background-color", "#2f55d4", "padding", "3px 0", "line-height", "68px", "text-align", "center", "color", "#fff", "font-size", "24px", "font-weight", "700", "letter-spacing", "1px"], ["scope", "col"], ["src", "assets/images/logo-light.png", "height", "24", "alt", ""], [2, "padding", "48px 24px 0", "color", "#161c2d", "font-size", "18px", "font-weight", "600"], [2, "padding", "15px 24px 15px", "color", "#8492a6"], [2, "padding", "15px 24px"], ["href", "javascript:void(0)", 2, "padding", "8px 20px", "outline", "none", "text-decoration", "none", "font-size", "16px", "letter-spacing", "0.5px", "transition", "all 0.3s", "font-weight", "600", "border-radius", "6px", "background-color", "#2f55d4", "border", "1px solid #2f55d4", "color", "#ffffff"], [2, "padding", "15px 24px 0", "color", "#8492a6"], [2, "padding", "16px 8px", "color", "#8492a6", "background-color", "#f8f9fc", "text-align", "center"]],
  template: function EmailPasswordResetComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "table", 1)(2, "thead")(3, "tr", 2)(4, "th", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tbody")(7, "tr")(8, "td", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Hello, Harry ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr")(11, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " To reset your password, please click the button below : ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tr")(14, "td", 7)(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Reset Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr")(18, "td", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " This link will be active for 45 second from the time this email was sent. If you did not request to reset your password, please ignore this email and your account will not be affected. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "tr")(21, "td", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Landrick ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Support Team ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "tr")(26, "td", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u00A9 ", ctx.year, "Landrick. ");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1wYXNzd29yZC1yZXNldC5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZW1haWwvZW1haWwtcGFzc3dvcmQtcmVzZXQvZW1haWwtcGFzc3dvcmQtcmVzZXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esb0xBQW9MIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 2891:
/*!***********************************************!*\
  !*** ./src/app/shared/blog/blog.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": () => (/* binding */ BlogComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function BlogComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 5)(4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7)(6, "h5")(7, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9)(10, "ul", 10)(11, "li", 11)(12, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 14)(16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Read More ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 19)(23, "small", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "small", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.like);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r1.date, "");
  }
}
class BlogComponent {
  constructor() {}
  ngOnInit() {}
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) {
  return new (t || BlogComponent)();
};
BlogComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: BlogComponent,
  selectors: [["app-blog"]],
  inputs: {
    blogData: "blogData"
  },
  decls: 2,
  vars: 1,
  consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "card", "blog", "rounded", "border-0", "shadow"], [1, "position-relative"], ["alt", "...", 1, "card-img-top", "rounded-top", 3, "src"], [1, "overlay", "rounded-top", "bg-dark"], [1, "card-body", "content"], ["href", "javascript:void(0)", 1, "card-title", "title", "text-dark"], [1, "post-meta", "d-flex", "justify-content-between", "mt-3"], [1, "list-unstyled", "mb-0"], [1, "list-inline-item", "me-2", "mb-0"], ["href", "javascript:void(0)", 1, "text-muted", "like"], [1, "uil", "uil-heart", "me-1"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "text-muted", "comments"], [1, "uil", "uil-comment", "me-1"], ["routerLink", "/page-blog-detail", "href", "javascript:void(0);", 1, "text-muted", "readmore"], [1, "uil", "uil-angle-right-b"], [1, "author"], [1, "text-light", "user", "d-block"], [1, "uil", "uil-user"], [1, "text-light", "date"], [1, "uil", "uil-calendar-alt"]],
  template: function BlogComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BlogComponent_div_1_Template, 29, 6, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blogData);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MifQ== */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Jsb2cvYmxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxnS0FBZ0siLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5229:
/*!***************************************************************!*\
  !*** ./src/app/shared/clients-logo/clients-logo.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientsLogoComponent": () => (/* binding */ ClientsLogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


function ClientsLogoComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", data_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
  }
}
;
class ClientsLogoComponent {
  constructor() {
    /**
     * Clients Logo
     */
    this.clients_logo = [{
      image: "assets/images/client/amazon.svg"
    }, {
      image: "assets/images/client/google.svg"
    }, {
      image: "assets/images/client/lenovo.svg"
    }, {
      image: "assets/images/client/paypal.svg"
    }, {
      image: "assets/images/client/shopify.svg"
    }, {
      image: "assets/images/client/spotify.svg"
    }];
  }
  ngOnInit() {}
}
ClientsLogoComponent.ɵfac = function ClientsLogoComponent_Factory(t) {
  return new (t || ClientsLogoComponent)();
};
ClientsLogoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ClientsLogoComponent,
  selectors: [["app-clients-logo"]],
  decls: 2,
  vars: 1,
  consts: [[1, "row", "justify-content-center"], ["class", "col-lg-2 col-md-2 col-6 text-center", 4, "ngFor", "ngForOf"], [1, "col-lg-2", "col-md-2", "col-6", "text-center"], ["alt", "", 1, "avatar", "avatar-ex-sm", 3, "src"]],
  template: function ClientsLogoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ClientsLogoComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.clients_logo);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnRzLWxvZ28uY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2NsaWVudHMtbG9nby9jbGllbnRzLWxvZ28uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0Esd0tBQXdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 1717:
/*!*******************************************************!*\
  !*** ./src/app/shared/features/features.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeaturesComponent": () => (/* binding */ FeaturesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-feather */ 3918);



function FeaturesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5)(1, "div", 6)(2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i-feather", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9)(5, "h4", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const data_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", data_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](data_r1.title);
  }
}
;
class FeaturesComponent {
  constructor() {
    /**
     * Clients Logo
     */
    this.featuresdata = [{
      icon: "monitor",
      title: "Fully Responsive"
    }, {
      icon: "heart",
      title: "Browser Compatibility"
    }, {
      icon: "eye",
      title: "Retina Ready"
    }, {
      icon: "bold",
      title: "Based On Bootstrap 5"
    }, {
      icon: "feather",
      title: "Feather Icons"
    }, {
      icon: "code",
      title: "Built With SASS"
    }, {
      icon: "user-check",
      title: "W3c Valid Code"
    }, {
      icon: "git-merge",
      title: "Flaticon Icons"
    }, {
      icon: "settings",
      title: "Easy to customize"
    }];
  }
  ngOnInit() {}
}
FeaturesComponent.ɵfac = function FeaturesComponent_Factory(t) {
  return new (t || FeaturesComponent)();
};
FeaturesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FeaturesComponent,
  selectors: [["app-features"]],
  decls: 6,
  vars: 1,
  consts: [[1, "row"], ["class", "col-lg-4 col-md-6 mt-4 pt-2", 4, "ngFor", "ngForOf"], [1, "col-12", "mt-4", "pt-2", "text-center"], ["href", "javascript:void(0)", 1, "btn", "btn-primary"], [1, "uil", "uil-angle-right"], [1, "col-lg-4", "col-md-6", "mt-4", "pt-2"], [1, "d-flex", "key-feature", "align-items-center", "p-3", "rounded", "shadow"], [1, "icon", "text-center", "rounded-circle", "me-3"], [1, "fea", "icon-ex-md", "text-primary", 3, "name"], [1, "flex-1"], [1, "title", "mb-0"]],
  template: function FeaturesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FeaturesComponent_div_1_Template, 7, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "See More ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.featuresdata);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, angular_feather__WEBPACK_IMPORTED_MODULE_2__.FeatherComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlcy5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2ZlYXR1cmVzL2ZlYXR1cmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 2508);





function FooterComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "footer", 11)(2, "div", 12)(3, "div", 13)(4, "div", 14)(5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 18)(10, "li", 19)(11, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i-feather", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 22)(14, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i-feather", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 22)(17, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i-feather", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 22)(20, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i-feather", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 26)(23, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 28)(26, "li")(27, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " About us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li")(31, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Services");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Team");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li")(39, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "li")(43, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Project");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li")(47, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Careers");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li")(51, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li")(55, "a", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 38)(59, "h5", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Sign up and receive the latest tips via email. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "form")(64, "div", 13)(65, "div", 39)(66, "div", 40)(67, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Write your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "i-feather", 44)(73, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 39)(75, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()()();
  }
}
function FooterComponent_div_0_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 48)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Hi-Tech ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 50)(9, "li", 19)(10, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i-feather", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 22)(13, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i-feather", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 22)(16, "a", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i-feather", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 22)(19, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i-feather", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 26)(22, "h5", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Company");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "ul", 28)(25, "li")(26, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Portfolio");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li")(30, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Blog");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li")(34, "a", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Contact us");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li")(38, "a", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "i", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 38)(43, "h5", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Newsletter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sign up and receive the latest tips via email.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "form")(48, "div", 13)(49, "div", 39)(50, "div", 40)(51, "label", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Write your email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "span", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i-feather", 44)(57, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 39)(59, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
  }
}
function FooterComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FooterComponent_div_0_div_1_Template, 77, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FooterComponent_div_0_ng_template_2_Template, 61, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footerVariant == "bg-light")("ngIfElse", _r2);
  }
}
/***
 * Footer Component
 */
class FooterComponent {
  constructor() {
    //Get Year
    this.year = new Date().getFullYear();
  }
  ngOnInit() {}
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) {
  return new (t || FooterComponent)();
};
FooterComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FooterComponent,
  selectors: [["app-footer"]],
  inputs: {
    footerVariant: "footerVariant",
    hideFooter: "hideFooter"
  },
  decls: 14,
  vars: 2,
  consts: [[4, "ngIf"], [1, "footer", "footer-bar"], [1, "container", "text-center"], [1, "row", "align-items-center"], [1, "col-sm-6"], [1, "text-sm-start"], [1, "mb-0"], [1, "mdi", "mdi-heart", "text-danger"], ["href", "javascript:void(0);", 1, "text-reset"], [4, "ngIf", "ngIfElse"], ["execute_block", ""], [1, "footer", "bg-light"], [1, "container"], [1, "row"], [1, "col-lg-4", "col-12", "mb-0", "mb-md-4", "pb-0", "pb-md-2"], ["href", "#", 1, "logo-footer"], ["src", "assets/images/logo-dark.png", "height", "24", "alt", ""], [1, "mt-4", "text-muted"], [1, "list-unstyled", "social-icon", "social", "mb-0", "mt-4"], [1, "list-inline-item"], ["href", "javascript:void(0)", 1, "rounded"], ["name", "facebook", 1, "fea", "icon-sm", "fea-social"], [1, "list-inline-item", "ms-1"], ["name", "instagram", 1, "fea", "icon-sm", "fea-social"], ["name", "twitter", 1, "fea", "icon-sm", "fea-social"], ["name", "linkedin", 1, "fea", "icon-sm", "fea-social"], [1, "col-lg-2", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "text-dark", "footer-head"], [1, "list-unstyled", "footer-list", "mt-4"], ["routerLink", "/page-aboutus", 1, "text-muted"], [1, "uil", "uil-angle-right-b", "me-1"], ["routerLink", "/page-services", 1, "text-muted"], ["routerLink", "/page-team", 1, "text-muted"], ["routerLink", "/page-pricing", 1, "text-muted"], ["routerLink", "/portfolio-modern-three", 1, "text-muted"], ["routerLink", "/page-jobs", 1, "text-muted"], ["routerLink", "/page-blog-grid", 1, "text-muted"], ["routerLink", "/auth-cover-login", 1, "text-muted"], [1, "col-lg-3", "col-md-4", "col-12", "mt-4", "mt-sm-0", "pt-2", "pt-sm-0"], [1, "col-lg-12"], [1, "foot-subscribe", "foot-white", "mb-3"], [1, "form-label"], [1, "text-danger"], [1, "form-icon", "position-relative"], ["name", "mail", 1, "fea", "icon-sm", "icons"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "bg-light", "border", "ps-5", "rounded"], [1, "d-grid"], ["type", "submit", "id", "submitsubscribe", "name", "send", "value", "Subscribe", 1, "btn", "btn-soft-primary"], [1, "footer"], [1, "mt-4"], [1, "list-unstyled", "social-icon", "foot-social-icon", "mb-0", "mt-4"], ["href", "https://github.com/SlowedWalk", 1, "rounded"], ["name", "github", 1, "fea", "icon-sm", "fea-social"], ["href", "https://twitter.com/hidetora_237", 1, "rounded"], ["href", "https://www.linkedin.com/in/mekeng-a-afaka-7b0923200", 1, "rounded"], [1, "text-light", "footer-head"], ["routerLink", "/portfolio-modern-three", 1, "text-foot"], ["routerLink", "/page-blog-grid", 1, "text-foot"], ["routerLink", "/page-contact-one", 1, "text-foot"], ["routerLink", "/auth-cover-login", 1, "text-foot"], ["type", "email", "name", "email", "id", "emailsubscribe", "placeholder", "Your email : ", "required", "", 1, "form-control", "ps-5", "rounded"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, FooterComponent_div_0_Template, 4, 2, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "p", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u00A9 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " by ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Hidetora");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, ". ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.hideFooter);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.year, " Hi-Tech. Design with ");
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, angular_feather__WEBPACK_IMPORTED_MODULE_3__.FeatherComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9470:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 4534);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





function HeaderComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Hi-Tech ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a", 16);
  }
}
function HeaderComponent_span_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
}
function HeaderComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span")(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, HeaderComponent_span_5_ng_template_2_Template, 2, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.navClass !== "nav-light");
  }
}
const _c0 = function (a0) {
  return {
    "tagline-height": a0
  };
};
const _c1 = function (a0) {
  return {
    "open": a0
  };
};
/***
 * Header Component
 */
class HeaderComponent {
  constructor(router, modalService) {
    this.router = router;
    this.modalService = modalService;
    this.isCondensed = false;
    this.router.events.forEach(event => {
      if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__.NavigationEnd) {
        this._activateMenuDropdown();
      }
    });
  }
  ngAfterViewInit() {
    this._activateMenuDropdown();
  }
  ngOnInit() {}
  _activateMenuDropdown() {
    /**
     * Menu activation reset
     */
    const resetParent = el => {
      el.classList.remove("active");
      const parent = el.parentElement;
      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.remove("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.remove("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.remove("active");
            }
          }
        }
      }
    };
    let links = document.getElementsByClassName("nav-link-ref");
    let matchingMenuItem = null;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < links.length; i++) {
      // reset menu
      resetParent(links[i]);
    }
    for (let i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i]["pathname"]) {
        matchingMenuItem = links[i];
        break;
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");
      const parent = matchingMenuItem.parentElement;
      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add("active");
        const parent2 = parent.parentElement;
        if (parent2) {
          parent2.classList.add("active");
          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.add("active");
            const parent4 = parent3.parentElement;
            if (parent4) {
              const parent5 = parent4.parentElement;
              parent5.classList.add("active");
              document.getElementById("navigation").style.display = "none";
              this.isCondensed = false;
            }
          }
        }
      }
    }
  }
  /**
   * Window scroll method
   */
  // tslint:disable-next-line: typedef
  windowScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }
  /**
   * Toggle menu
   */
  toggleMenu() {
    this.isCondensed = !this.isCondensed;
    if (this.isCondensed) {
      document.getElementById("navigation").style.display = "block";
    } else {
      document.getElementById("navigation").style.display = "none";
    }
  }
  /**
   * Menu clicked show the submenu
   */
  onMenuClick(event) {
    event.preventDefault();
    const nextEl = event.target.nextSibling.nextSibling;
    if (nextEl && !nextEl.classList.contains("open")) {
      const parentEl = event.target.parentNode;
      if (parentEl) {
        parentEl.classList.remove("open");
      }
      nextEl.classList.add("open");
    } else if (nextEl) {
      nextEl.classList.remove("open");
    }
    return false;
  }
  developerModal(content) {
    this.modalService.open(content, {
      size: 'lg',
      centered: true
    });
  }
  wishListModal(content) {
    this.modalService.open(content, {
      centered: true
    });
  }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
  return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal));
};
HeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: HeaderComponent,
  selectors: [["app-header"]],
  inputs: {
    navClass: "navClass",
    buttonList: "buttonList",
    sliderTopbar: "sliderTopbar",
    isdeveloper: "isdeveloper",
    shopPages: "shopPages"
  },
  decls: 30,
  vars: 13,
  consts: [["id", "topnav", 1, "defaultscroll", "sticky", 3, "ngClass", "scroll"], [1, "container"], ["class", "logo", "routerLink", "/index", 4, "ngIf"], [4, "ngIf"], [1, "menu-extras"], [1, "menu-item"], ["id", "isToggle", 1, "navbar-toggle", 3, "ngClass", "click"], [1, "lines"], ["id", "navigation"], [1, "navigation-menu"], ["routerLink", "/", 1, "nav-link-ref"], ["routerLink", "/index-portfolio", 1, "nav-link-ref"], ["routerLink", "/index-blog", 1, "nav-link-ref"], ["routerLink", "/page-contact-one", 1, "nav-link-ref"], [1, "buy-menu-btn", "d-none"], ["href", "javascript: void(0);", 1, "btn", "btn-primary"], ["routerLink", "/index", 1, "logo"], [1, "buy-button"], [3, "ngIf"], ["href", "/auth-login", 1, "btn", "btn-primary"]],
  template: function HeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_header_scroll_0_listener() {
        return ctx.windowScroll();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HeaderComponent_a_3_Template, 2, 0, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HeaderComponent_a_4_Template, 1, 0, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HeaderComponent_span_5_Template, 3, 1, "span", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_a_click_8_listener() {
        return ctx.toggleMenu();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span")(11, "span")(12, "span");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8)(14, "ul", 9)(15, "li")(16, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li")(19, "a", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Portfolio ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li")(22, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Blog ");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li")(25, "a", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14)(28, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Login");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.sliderTopbar == true));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass !== "nav-light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.navClass === "nav-light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.buttonList && !ctx.isdeveloper && !ctx.shopPages);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.isCondensed === true));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.navClass);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsZ0tBQWdLIiwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 6564:
/*!***********************************************!*\
  !*** ./src/app/shared/scrollspy.directive.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScrollspyDirective": () => (/* binding */ ScrollspyDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



class ScrollspyDirective {
  // tslint:disable-next-line: variable-name
  constructor(_el, document) {
    this._el = _el;
    this.document = document;
    this.spiedTags = [];
    this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }
  /**
   * Window scroll method
   */
  onScroll(event) {
    let currentSection;
    const children = this._el.nativeElement.querySelectorAll('section');
    const scrollTop = this.document.documentElement.scrollTop;
    const parentOffset = this.document.documentElement.offsetTop;
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < children.length; i++) {
      const element = children[i];
      if (this.spiedTags.some(spiedTag => spiedTag === element.tagName)) {
        if (element.offsetTop - parentOffset <= scrollTop) {
          currentSection = element.id;
        }
      }
    }
    if (currentSection !== this.currentSection) {
      this.currentSection = currentSection;
      this.sectionChange.emit(this.currentSection);
    }
  }
}
ScrollspyDirective.ɵfac = function ScrollspyDirective_Factory(t) {
  return new (t || ScrollspyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT));
};
ScrollspyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ScrollspyDirective,
  selectors: [["", "appScrollspy", ""]],
  hostBindings: function ScrollspyDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollspyDirective_scroll_HostBindingHandler($event) {
        return ctx.onScroll($event);
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    }
  },
  inputs: {
    spiedTags: "spiedTags"
  },
  outputs: {
    sectionChange: "sectionChange"
  }
});

/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-owl-carousel-o */ 7135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollspy.directive */ 6564);
/* harmony import */ var angular_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-feather */ 3918);
/* harmony import */ var _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clients-logo/clients-logo.component */ 5229);
/* harmony import */ var _features_features_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/features.component */ 1717);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blog/blog.component */ 2891);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);









class SharedModule {}
SharedModule.ɵfac = function SharedModule_Factory(t) {
  return new (t || SharedModule)();
};
SharedModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
  type: SharedModule
});
SharedModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent, _features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_6__.CarouselModule, angular_feather__WEBPACK_IMPORTED_MODULE_7__.FeatherModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
    exports: [_scrollspy_directive__WEBPACK_IMPORTED_MODULE_0__.ScrollspyDirective, _clients_logo_clients_logo_component__WEBPACK_IMPORTED_MODULE_1__.ClientsLogoComponent, _features_features_component__WEBPACK_IMPORTED_MODULE_2__.FeaturesComponent, _blog_blog_component__WEBPACK_IMPORTED_MODULE_3__.BlogComponent]
  });
})();

/***/ }),

/***/ 2157:
/*!*******************************************************!*\
  !*** ./src/app/shared/switcher/switcher.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitcherComponent": () => (/* binding */ SwitcherComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

/**
 * Switcher component
 */
class SwitcherComponent {
  constructor() {}
  ngOnInit() {
    // assign value
    this.isVisible = false;
  }
  /**
   * Change theme color
   */
  onChangeColor(color) {
    document.getElementById('color-opt').setAttribute('href', './assets/css/colors/' + color + '.css');
  }
  /**
   * Set dark theme
   */
  setDark() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set light theme
   */
  setLight() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }
  /**
   * Set dark-rtl theme
   */
  darkRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark-rtl.min.css');
  }
  /**
   * Set dark-light theme
   */
  darkLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-dark.min.css');
  }
  /**
   * Set rtl theme
   */
  setRtl() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style-rtl.min.css');
  }
  /**
   * Set light theme
   */
  setLtr() {
    document.getElementById('theme-opt').setAttribute('href', './assets/css/style.min.css');
  }
  /**
   * Toggle switcher
   */
  onChangeSwitch() {
    this.isVisible = !this.isVisible;
  }
}
SwitcherComponent.ɵfac = function SwitcherComponent_Factory(t) {
  return new (t || SwitcherComponent)();
};
SwitcherComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: SwitcherComponent,
  selectors: [["app-switcher"]],
  decls: 14,
  vars: 2,
  consts: [["id", "style-switcher", 1, "bg-light", "border", "p-3", "pt-2", "pb-2", 2, "left", "0px"], [1, "title", "text-center", "pt-3", "mb-0", "border-top"], [1, "text-center", "list-unstyled", "mb-0"], [1, "d-grid"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "dark-version", "t-dark", "mt-2", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "btn-sm", "btn-block", "btn-dark", "light-version", "t-light", "mt-2", 3, "click"], [1, "bottom"], ["href", "javascript: void(0);", 1, "settings", "bg-white", "title-bg-dark", "shadow", "d-block", 3, "click"], [1, "mdi", "mdi-cog", "ms-1", "mdi-24px", "position-absolute", "mdi-spin", "text-primary"]],
  template: function SwitcherComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "h6", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Theme Option");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul", 2)(5, "li", 3)(6, "a", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_6_listener() {
        return ctx.setDark();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 3)(9, "a", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_9_listener() {
        return ctx.setLight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6)(12, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SwitcherComponent_Template_a_click_12_listener() {
        return ctx.onChangeSwitch();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](ctx.isVisible ? "left: 0px" : "left: -189px");
    }
  },
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzd2l0Y2hlci5jb21wb25lbnQuY3NzIn0= */\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3N3aXRjaGVyL3N3aXRjaGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLG9LQUFvSyIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map