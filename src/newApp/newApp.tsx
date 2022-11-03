import React from "react";
import AntdAutoComplete from "antd/lib/auto-complete";
import Button from "antd/lib/button";
import 'antd/dist/antd.css';
import * as S from './newApp.styles';


const NewApp:React.FC = () => {
    return (
        <div>
            <S.AppWrapper>
                <div>
                    <S.LabelWrapper>
                        Label
                    </S.LabelWrapper>
                  <AntdAutoComplete
                      style={{width: 200}}/>
                </div>
                <S.ButtonsWrapper>
                    <S.ButtonWrapper>
                        <Button type="primary">Primary Button</Button>
                    </S.ButtonWrapper>
                <Button type='primary'>Cancel</Button>
                </S.ButtonsWrapper>
                <S.DescWrapper>
                    Description
                </S.DescWrapper>
            </S.AppWrapper>
        </div>
    );
};
export default NewApp;