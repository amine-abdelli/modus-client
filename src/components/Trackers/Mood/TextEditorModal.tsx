import {
  Button, Modal, Tabs, Empty,
} from 'antd';
import React, { useState } from 'react';

import { formatDate } from '../../../utils/tools';
import { Daily } from '../../Daily/Daily';
import { TextEditor } from '../../Daily/TextEditor/TextEditor';

const { TabPane } = Tabs;

const TextEditorModal = ({ isModalVisible, setIsModalVisible, selectedDate }: any) => {
  const [hop, setHop] = useState('');
  const [isEditable, setIsEditable] = useState(false);
  const [anyData, setAnyData] = useState(isEditable);
  return (
    <div>
      <Modal title={`${formatDate(selectedDate)}`} visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Consulter son journal" key="2">
            {anyData ? (
              <TextEditor
                isEditable={isEditable}
                setHop={setHop}
                hop={hop}
              />
            )
              : (
                <Empty description={
            (
              <>
                <p>Pas de data à ce stade wallah</p>
                <Button onClick={() => {
                  setIsEditable(!isEditable);
                  setAnyData(true);
                }}
                >
                  Ecrire

                </Button>
              </>
            )
            }
                />
              )}
          </TabPane>
        </Tabs>
      </Modal>
    </div>
  );
};

export default TextEditorModal;
