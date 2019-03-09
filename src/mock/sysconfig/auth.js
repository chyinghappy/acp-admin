export const getMenuListByAppId = () => {
  return [{
    'id': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': '系统配置',
    'iconType': 'md-settings',
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'enabled': true,
    'covert': false,
    'opentype': 0,
    'sort': 0,
    'children': [{
      'id': 'dbdb15db-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '机构配置',
      'iconType': 'md-git-network',
      'path': '/orgconfig',
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 4,
      'children': []
    }, {
      'id': 'dbda2254-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '应用配置',
      'iconType': 'md-apps',
      'path': '/appconfig',
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 0,
      'children': []
    }, {
      'id': 'dbda5bf9-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '角色配置',
      'iconType': 'md-contacts',
      'path': '/roleconfig',
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 1,
      'children': []
    }, {
      'id': 'dbdadf09-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '用户配置',
      'iconType': 'md-people',
      'path': '/userconfig',
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 3,
      'children': []
    }, {
      'id': 'dbdb5115-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '运行参数配置',
      'iconType': 'md-build',
      'path': '/runtimeconfig',
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 5,
      'children': []
    }, {
      'id': 'dbdaa27b-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '权限配置',
      'iconType': 'md-key',
      'path': '/authconfig',
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 2,
      'children': []
    }]
  }, {
    'id': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': 'demo',
    'iconType': 'md-laptop',
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'enabled': true,
    'covert': true,
    'opentype': 0,
    'sort': 1,
    'children': [{
      'id': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '多级菜单',
      'iconType': 'md-funnel',
      'parentid': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': true,
      'opentype': 0,
      'sort': 1,
      'children': [{
        'id': 'dbdc90b0-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '普通页面',
        'iconType': 'md-funnel',
        'path': '/demo4?name=123',
        'parentid': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'enabled': true,
        'covert': true,
        'opentype': 0,
        'sort': 0,
        'children': []
      }, {
        'id': 'dbdcd7a2-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '很长很长的菜单名称用以测试显示效果',
        'iconType': 'md-funnel',
        'path': '/demo4?name=long%20long%20ago',
        'parentid': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'enabled': true,
        'covert': true,
        'opentype': 0,
        'sort': 1,
        'children': []
      }]
    }, {
      'id': 'dbdc0cd5-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '上传',
      'iconType': 'md-cloud-upload',
      'path': '/demo_upload',
      'parentid': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': true,
      'opentype': 0,
      'sort': 0,
      'children': []
    }, {
      'id': 'dbdd18fc-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '页面跳转',
      'iconType': 'md-funnel',
      'path': 'http://www.baidu.com',
      'parentid': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'enabled': true,
      'covert': true,
      'opentype': 1,
      'sort': 2,
      'children': []
    }]
  }, {
    'id': 'dbdd5362-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': '顶层菜单，名字长一点查看显示效果',
    'iconType': 'md-funnel',
    'path': '/demo4?name=in%20dialog',
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'enabled': true,
    'covert': true,
    'opentype': 0,
    'sort': 2,
    'children': []
  }]
}
export const getModuleFuncListByAppId = () => {
  return [{
    'id': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': '系统配置',
    'code': 'sys_config',
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'covert': false,
    'children': [{
      'id': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '角色配置',
      'code': 'roleconf_config',
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'covert': false,
      'children': [{
        'id': 'dbe2529f-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'roleconf_delete',
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe2958a-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'roleconf_update',
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe2e790-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'roleconf_query',
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe21984-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'roleconf_add',
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }]
    }, {
      'id': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '用户配置',
      'code': 'user_config',
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'covert': false,
      'children': [{
        'id': 'dbe6d9af-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'user_delete',
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe76485-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'user_query',
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe689d6-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'user_add',
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe7229f-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'user_update',
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }]
    }, {
      'id': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '权限配置',
      'code': 'auth_config',
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'covert': false,
      'children': [{
        'id': 'dbe5647e-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'auth_delete',
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe5288d-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'auth_add',
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe5f93d-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'auth_query',
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe5a048-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'auth_update',
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }]
    }, {
      'id': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '机构配置',
      'code': 'org_config',
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'covert': false,
      'children': [{
        'id': 'dbe385ad-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'org_add',
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe47fc4-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'org_query',
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe3f35b-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'org_delete',
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe43266-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'org_update',
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }]
    }, {
      'id': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '运行参数配置',
      'code': 'runtime_config',
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'covert': false,
      'children': [{
        'id': 'dbdf4c13-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'runtime_add',
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe00768-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'runtime_query',
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbdfcd7c-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'runtime_update',
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbdf975a-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'runtime_delete',
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }]
    }, {
      'id': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '应用配置',
      'code': 'app_config',
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'covert': false,
      'children': [{
        'id': 'dbe0b311-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'app_delete',
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe195ec-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新密钥',
        'code': 'app_update_secret',
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe15239-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'app_query',
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe112e0-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'app_update',
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }, {
        'id': 'dbe06f89-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'app_add',
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'covert': false,
        'children': []
      }]
    }]
  }]
}
export const getModuleFuncCodeList = () => {
  return ['other', 'sys_config', 'runtime_config', 'runtime_add', 'runtime_delete', 'runtime_update', 'runtime_query', 'app_config', 'app_add', 'app_delete', 'app_update', 'app_query', 'app_update_secret', 'org_config', 'org_add', 'org_delete', 'org_update', 'org_query', 'roleconf_config', 'roleconf_add', 'roleconf_delete', 'roleconf_update', 'roleconf_query', 'auth_config', 'auth_add', 'auth_delete', 'auth_update', 'auth_query', 'user_config', 'user_add', 'user_delete', 'user_update', 'user_query']
}
export const getAllMenuList = () => {
  return [{
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'children': [{
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbda2254-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '应用配置',
      'iconType': 'md-apps',
      'path': '/appconfig',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 0
    }, {
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbda5bf9-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '角色配置',
      'iconType': 'md-contacts',
      'path': '/roleconfig',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 1
    }, {
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdaa27b-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '权限配置',
      'iconType': 'md-key',
      'path': '/authconfig',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 2
    }, {
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdadf09-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '用户配置',
      'iconType': 'md-people',
      'path': '/userconfig',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 3
    }, {
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdb15db-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '机构配置',
      'iconType': 'md-git-network',
      'path': '/orgconfig',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 4
    }, {
      'parentid': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdb5115-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '运行参数配置',
      'iconType': 'md-build',
      'path': '/runtimeconfig',
      'enabled': true,
      'covert': false,
      'opentype': 0,
      'sort': 5
    }],
    'id': 'dbd9e278-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': '系统配置',
    'iconType': 'md-settings',
    'enabled': true,
    'covert': false,
    'opentype': 0,
    'sort': 0
  }, {
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'children': [{
      'parentid': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdc0cd5-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '上传',
      'iconType': 'md-cloud-upload',
      'path': '/demo_upload',
      'enabled': true,
      'covert': true,
      'opentype': 0,
      'sort': 0
    }, {
      'parentid': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdc90b0-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '普通页面',
        'iconType': 'md-funnel',
        'path': '/demo4?name=123',
        'enabled': true,
        'covert': true,
        'opentype': 0,
        'sort': 0
      }, {
        'parentid': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdcd7a2-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '很长很长的菜单名称用以测试显示效果',
        'iconType': 'md-funnel',
        'path': '/demo4?name=long%20long%20ago',
        'enabled': true,
        'covert': true,
        'opentype': 0,
        'sort': 1
      }],
      'id': 'dbdc4e5a-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '多级菜单',
      'iconType': 'md-funnel',
      'enabled': true,
      'covert': true,
      'opentype': 0,
      'sort': 1
    }, {
      'parentid': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
      'children': [],
      'id': 'dbdd18fc-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '页面跳转',
      'iconType': 'md-funnel',
      'path': 'http://www.baidu.com',
      'enabled': true,
      'covert': true,
      'opentype': 1,
      'sort': 2
    }],
    'id': 'dbdba3bf-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': 'demo',
    'iconType': 'md-laptop',
    'enabled': true,
    'covert': true,
    'opentype': 0,
    'sort': 1
  }, {
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'children': [],
    'id': 'dbdd5362-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': '顶层菜单，名字长一点长一点再长一点点',
    'iconType': 'md-funnel',
    'path': '/demo4?name=in%20dialog',
    'enabled': true,
    'covert': true,
    'opentype': 0,
    'sort': 2
  }]
}
export const getAllModuleFuncList = () => {
  return [{
    'parentid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'children': [{
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe06f89-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'app_add',
        'covert': false
      }, {
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe0b311-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'app_delete',
        'covert': false
      }, {
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe15239-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'app_query',
        'covert': false
      }, {
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe112e0-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'app_update',
        'covert': false
      }, {
        'parentid': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe195ec-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新密钥',
        'code': 'app_update_secret',
        'covert': false
      }],
      'id': 'dbe0394a-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '应用配置',
      'code': 'app_config',
      'covert': false
    }, {
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe5288d-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'auth_add',
        'covert': false
      }, {
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe5647e-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'auth_delete',
        'covert': false
      }, {
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe5f93d-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'auth_query',
        'covert': false
      }, {
        'parentid': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe5a048-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'auth_update',
        'covert': false
      }],
      'id': 'dbe4cfcc-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '权限配置',
      'code': 'auth_config',
      'covert': false
    }, {
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe385ad-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'org_add',
        'covert': false
      }, {
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe3f35b-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'org_delete',
        'covert': false
      }, {
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe47fc4-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'org_query',
        'covert': false
      }, {
        'parentid': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe43266-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'org_update',
        'covert': false
      }],
      'id': 'dbe3343a-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '机构配置',
      'code': 'org_config',
      'covert': false
    }, {
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe21984-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'roleconf_add',
        'covert': false
      }, {
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe2529f-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'roleconf_delete',
        'covert': false
      }, {
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe2e790-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'roleconf_query',
        'covert': false
      }, {
        'parentid': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe2958a-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'roleconf_update',
        'covert': false
      }],
      'id': 'dbe1d879-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '角色配置',
      'code': 'roleconf_config',
      'covert': false
    }, {
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdf4c13-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'runtime_add',
        'covert': false
      }, {
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdf975a-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'runtime_delete',
        'covert': false
      }, {
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe00768-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'runtime_query',
        'covert': false
      }, {
        'parentid': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbdfcd7c-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'runtime_update',
        'covert': false
      }],
      'id': 'dbdefaa5-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '运行参数配置',
      'code': 'runtime_config',
      'covert': false
    }, {
      'parentid': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
      'children': [{
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe689d6-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '新增',
        'code': 'user_add',
        'covert': false
      }, {
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe6d9af-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '删除',
        'code': 'user_delete',
        'covert': false
      }, {
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe76485-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '查询',
        'code': 'user_query',
        'covert': false
      }, {
        'parentid': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
        'children': [],
        'id': 'dbe7229f-19fb-11e9-894e-d8c49792dd7b',
        'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
        'name': '更新',
        'code': 'user_update',
        'covert': false
      }],
      'id': 'dbe64917-19fb-11e9-894e-d8c49792dd7b',
      'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
      'name': '用户配置',
      'code': 'user_config',
      'covert': false
    }],
    'id': 'dbdebf16-19fb-11e9-894e-d8c49792dd7b',
    'appid': 'dbd1458a-19fb-11e9-894e-d8c49792dd7b',
    'name': '系统配置',
    'code': 'sys_config',
    'covert': false
  }]
}
export const getMenuInfo = () => {
  return {
    'id': '4688c606-1d33-11e9-a49e-d8c49792dd7b',
    'appid': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'name': '新菜单',
    'iconType': 'md-funnel',
    'path': '/',
    'parentid': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'enabled': false,
    'opentype': 0,
    'sort': 1,
    'roleIds': []
  }
}
export const getModuleFuncInfo = () => {
  return {
    'parentid': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'children': [],
    'id': 'b43d56df-1d34-11e9-a49e-d8c49792dd7b',
    'appid': 'aa4da240-1bf2-11e9-a49e-d8c49792dd7b',
    'name': '新模块功能',
    'code': 'other',
    'covert': true
  }
}
export const deleteAuth = () => {
  return { 'message': '删除成功' }
}
