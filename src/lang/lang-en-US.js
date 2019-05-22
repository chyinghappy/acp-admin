import enLocale from 'iview/src/locale/lang/en-US'

const messages = Object.assign(enLocale, {
  lang: 'Lang',
  langName: 'English',
  messages: {
    loginSuccess: 'Login successfully',
    loginFailed: 'Login failed',
    loginInvalid: 'loginNo and password do not match',
    logoutConfirm: 'Confirm to logout current system ?',
    requestFailed: 'Requesst failed',
    failed403: 'Request rejected, may not hava permission, please contact the system administrator',
    leavePage: 'The data entered will be lost. Are you sure to close?',
    allPages: 'All Pages',
    otherPages: 'Other Pages',
    createSuccess: 'Create Successfully',
    saveSuccess: 'Save Successfully',
    updateSuccess: 'Update Successfully',
    deleteSuccess: 'Delete Successfully',
    changedPassword: 'You have changed your password. Please log in again.',
    tableNoData: 'No data found',
    tableDataCannotDel: 'This data cannot be deleted',
    selectDataForDelete: 'Please select the data you want to delete',
    deleteDataConfirm: 'Are you sure to delete the selected data?',
    modifyLoginNo: 'Modifying the loginNo will reset the password. Do you want to continue?',
    resetPassword: 'Are you sure you want to reset the selected user password?',
    refreshServiceConfirm: 'Are you sure to refresh the service configuration information? All services will retrieve configuration information from the configuration center',
    refreshRouteConfirm: 'Are you sure to refresh gateway routing information?'
  },
  pageTitle: {
    test: 'test',
    E404: '404',
    E500: '500',
    login: 'login',
    home: 'home',
    personalInformation: 'Personal Information Configure',
    routeConfig: 'Route Configure',
    routeLog: 'Route Log',
    configCenter: 'Config Center',
    logFile: 'Log File',
    appConfig: 'Application Configure',
    authConfig: 'Authority Configure',
    orgConfig: 'Organization Configure',
    runtimeConfig: 'Parameter Configure',
    roleConfig: 'Role Configure',
    userConfig: 'User Configure'
  },
  common: {
    exit: 'Exit'
  },
  dialog: {
    info: 'Message',
    error: 'Error message',
    warning: 'Warning message',
    success: 'Success',
    confirm: 'Please confirm'
  },
  home: {
    fullScreen: 'FullScreen',
    exitFullScreen: 'Exit FullScreen',
    personalInformation: 'Personal Information',
    logout: 'logout',
    closeAll: 'Close All',
    closeOther: 'Close Other'
  },
  errorPage: {
    message404: 'Page not found',
    description404: '',
    message500: 'Internal Server Error',
    buttons: {
      back: 'back',
      home: 'home'
    }
  },
  forms: {
    changePassword: 'Change Password',
    pleaseEnter: 'Please enter ',
    loginNo: 'loginNo',
    password: 'password',
    rememberMe: 'remember me',
    avatar: 'avatar',
    avatarUpload: 'Avatar Upload',
    name: 'name',
    profile: 'profile',
    label: 'label',
    key: 'key',
    code: 'code',
    sort: 'sort',
    level: 'level',
    parent: 'parent',
    userList: 'user list',
    roleList: 'role list',
    selected: 'selected',
    optional: 'optional',
    value: 'value',
    mobile: 'mobile',
    describe: 'describe',
    remarks: 'remarks',
    info: 'info',
    action: 'action',
    invalid: ' is invalid',
    enabled: 'enabled',
    disabled: 'disabled',
    notEmpty: ' can not be empty',
    incorrect: ' is incorrect',
    width: 'Width',
    height: 'Height',
    old: 'Old ',
    new: 'New ',
    confirmPassword: 'Confirm password',
    passwordNotEqual: 'Confirm password is not equal new password',
    accessTokenValiditySeconds: 'token validity',
    refreshTokenValiditySeconds: 'refresh Token validity',
    seconds: 'seconds',
    millisecond: 'millisecond',
    organization: 'Organization',
    role: 'Role',
    menu: 'Menu',
    moduleFunc: 'ModuleFunction',
    basicInfo: 'Basic Info',
    menuList: 'menu list',
    moduleFuncList: 'ModuleFunc list',
    orgList: 'organization list',
    orgMngList: 'Administrable organization',
    iconType: 'icon',
    path: 'path',
    opentype: 'open type',
    inner: 'inner',
    newTabs: 'new tabs',
    status: 'status',
    startDate: 'Start Date',
    endDate: 'End Date',
    startDateCantGreaterThenEndDate: 'Start date should not be greater than end date',
    routeId: 'Route Id',
    uri: 'uri',
    predicates: 'predicates',
    filters: 'filters',
    remoteIp: 'remote ip',
    gatewayIp: 'gateway ip',
    serverId: 'server id',
    targetUri: 'target uri',
    requestTime: 'request time',
    processTime: 'process time',
    responseTime: 'response time',
    responseStatus: 'response status',
    buttons: {
      login: 'login',
      submit: 'submit',
      search: 'search',
      edit: 'edit',
      update: 'update',
      save: 'save',
      delete: 'delete',
      cancel: 'cancel',
      add: 'add',
      reset: 'reset',
      upload: 'upload',
      view: 'view',
      free: 'Free',
      updateSecret: 'update secret',
      select: 'select',
      deSelect: 'Deselect',
      refresh: 'Refresh',
      resetPwd: 'reset password',
      refreshService: 'refresh services',
      refreshRoute: 'refresh routes'
    }
  }
})

export default messages
