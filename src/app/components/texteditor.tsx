import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { Card, Button, Row, Col, Space, Flex } from 'antd';
import { BoldOutlined, ItalicOutlined, AlignLeftOutlined, AlignCenterOutlined, AlignRightOutlined, ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

const TextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorChange = (state: EditorState) => {
    setEditorState(state);
  };

  const handleBold = () => {
    const newState = RichUtils.toggleInlineStyle(editorState, 'BOLD');
    setEditorState(newState);
  };

  const handleItalic = () => {
    const newState = RichUtils.toggleInlineStyle(editorState, 'ITALIC');
    setEditorState(newState);
  };

  const handleAlignment = (alignment: string) => {
    const newState = RichUtils.toggleBlockType(editorState, alignment);
    setEditorState(newState);
  };

  return (
    <Card bodyStyle={{ backgroundColor: '#f1efef' }} title={
      <Flex style={{ justifyContent: 'space-between' }} align='center'>
        <Row gutter={[8, 8]} style={{ marginBottom: 10 }}>
          <Col>
            <Button icon={<BoldOutlined />} onClick={handleBold} />
          </Col>
          <Col>
            <Button icon={<ItalicOutlined />} onClick={handleItalic} />
          </Col>
          <Col>
            <Button icon={<AlignLeftOutlined />} onClick={() => handleAlignment('left')} />
          </Col>
          <Col>
            <Button icon={<AlignCenterOutlined />} onClick={() => handleAlignment('center')} />
          </Col>
          <Col>
            <Button icon={<AlignRightOutlined />} onClick={() => handleAlignment('right')} />
          </Col>
        </Row>
        <Row justify="end">
          <Col>
            <Space>
              <ArrowLeftOutlined />
              <ArrowRightOutlined />
            </Space>
          </Col>
        </Row>
      </Flex>
    }>
      <Editor
        editorState={editorState}
        onChange={onEditorChange}
      />
    </Card>
  );
};

export default TextEditor;
