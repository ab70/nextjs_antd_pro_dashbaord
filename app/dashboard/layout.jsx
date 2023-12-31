"use client"
import React, { useState } from 'react';
import { PageContainer, ProCard, ProLayout } from '@ant-design/pro-components';
import defaultProps from '../defaultProps';
export default function RootLayout({ children }) {
  const settings = {
    fixSiderbar: true,
    fixedHeader: true,
    layout: 'mix',
    splitMenus: true,
    //   route: {
    //     routes: defaultProps
    // }
  };

  const [pathname, setPathname] = useState('/admin/');

  return (
    <html>
      <body>
        <div id="test-pro-layout" style={{ height: '100vh' }}>
          <ProLayout
            bgLayoutImgList={[
              {
                src:
                  'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                left: 85,
                bottom: 100,
                height: '303px',
              },
              {
                src:
                  'https://img.alicdn.com/imgextra/i2/O1CN01O4etvp1DvpFLKfuWq_!!6000000000279-2-tps-609-606.png',
                bottom: -68,
                right: -45,
                height: '303px',
              },
              {
                src:
                  'https://img.alicdn.com/imgextra/i3/O1CN018NxReL1shX85Yz6Cx_!!6000000005798-2-tps-884-496.png',
                bottom: 0,
                left: 0,
                width: '331px',
              },
            ]}
            {...defaultProps}
            location={{
              pathname,
            }}
            // siderMenuType="group"
            menu={{
              type: 'group',
              // collapsedShowGroupTitle: true,
            }}
            avatarProps={{
              src:
                'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
              size: 'small',
              title: '七妮妮',
            }}

            menuFooterRender={(props) => {
              if (props?.collapsed) return undefined;
              return (
                <div
                  style={{
                    textAlign: 'center',
                    padding: "2%",
                    // paddingBlockStart: 12,
                    bottom: 0,
                    position: "fixed"
                  }}
                >
                  <div>© 2021 Made with love</div>
                  <div>by Ant Design</div>
                </div>
              );
            }}
            onMenuHeaderClick={(e) => console.log(e)}
            menuItemRender={(item, dom) => (
              <div
                onClick={() => {
                  setPathname(item.path || '/welcome');
                }}
              >
                {dom}
              </div>
            )}
            {...settings}
          >
            <PageContainer>
              <ProCard
                style={{
                  height: '100vh',
                  minHeight: 800,
                }}
              >
                {children}
              </ProCard>
            </PageContainer>
          </ProLayout>
        </div>
      </body>
    </html>

  );
}
