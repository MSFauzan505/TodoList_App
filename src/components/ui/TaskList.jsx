import React from 'react';
import useDrawer from '../../hooks/useDrawer';
import { Button, Checkbox, Input } from 'antd';
import { CalendarOutlined, PlusOutlined } from '@ant-design/icons';
import DrawerTask from './DrawerTask';

const TaskList = () => {
  const { open, onClose, showDrawer } = useDrawer();

  return (
    <div className="flex flex-col gap-2 h-full">
      {/* Input Add Task */}
      <Button
        icon={<PlusOutlined/>}
        size='large'
        className='flex justify-between items-center w-full pr-2'
        onClick={showDrawer}
      >
        <span className='flex-1 text-left'>Add new task</span>
      </Button>

      {/* Scrollable Task Area */}
      <div className="overflow-y-auto flex-1 pr-1">
        {/* Tasks */}
        <div className="flex flex-col border-b hover:bg-gray-100 transition-all border-gray-200 py-3 px-2">
          <div className="flex justify-between w-full ">
            <Checkbox
              className="h-full flex-4 w-full "
              style={{
                fontSize: '1.3rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              Task 1
            </Checkbox>
            <DrawerTask open={open} onClose={onClose} showDrawer={showDrawer} />
          </div>

          <div className="flex gap-5 ml-10 mt-2">
            <span className="flex items-center text-sm gap-2">
              <CalendarOutlined />
              12-12-2024
            </span>
            <span className="flex items-center text-sm gap-2">
              <span className="bg-gray-200 rounded text-sm px-2 py-0.5">3</span>
              <span>Subtasks</span>
            </span>
            <span className="flex items-center text-sm gap-2">
              <span className="bg-yellow-400 rounded text-sm px-2 py-2"></span>
              <span>Personal</span>
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default TaskList;
