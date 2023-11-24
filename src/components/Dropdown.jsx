import React from 'react';
import { ConfigProvider, Dropdown, Space } from 'antd';

function DropdownMenu({items, value, icon}){
    return (
        <ConfigProvider 
            theme={{
                token: {
                    borderRadius: '3px',
                    colorBgBase: '#cbd5e1'
                }
            }}
        >
            <Dropdown 
                menu={{items,}} 
                trigger={['click']} 
                className='rounded-sm'
            >
                <button onClick={(e) => e.preventDefault()}>
                    <Space>
                        <span className="flex tablet:gap-2 gap-0">
                            {icon}
                            {value}
                        </span>
                    </Space>
                </button>
            </Dropdown>
        </ConfigProvider>
    );
}

export default DropdownMenu;