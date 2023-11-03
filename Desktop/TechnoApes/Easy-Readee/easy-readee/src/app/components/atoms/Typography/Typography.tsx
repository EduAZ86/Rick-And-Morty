import React from 'react'
import { typographyPropsInterface } from './types'
import { MainTitleStyled, TitleStyled, SubTitleStyled ,ParagraphStyled, LabelStyled  } from './styled'

const Typography:React.FC<typographyPropsInterface> = ({content,style}) => {

    return(
        <>
            {content.type === 'maintitle' && 
                <MainTitleStyled
                    color={style.color}
                    fontSize={style.fontSize}
                >
                    {content.text}
                </MainTitleStyled>
            }
            {content.type === 'title' && 
                <TitleStyled
                    color={style.color}
                    fontSize={style.fontSize}
                >
                    {content.text}
                </TitleStyled>
            }
            {content.type === 'subtitle' && 
                <SubTitleStyled
                    color={style.color}
                    fontSize={style.fontSize}
                >
                    {content.text}
                </SubTitleStyled>
            }
            {content.type === 'paragraph' && 
                <ParagraphStyled
                    color={style.color}
                    fontSize={style.fontSize}
                    fontWeight={style.fontWeight}
                    textAlign={style.textAlign}
                >
                    {content.text}
                </ParagraphStyled>
            }
            {content.type === 'label' && 
                <LabelStyled
                    htmlFor={content.htmlFor}
                    color={style.color}
                    fontSize={style.fontSize}
                >
                    {content.text}
                </LabelStyled>
            }
        </>
    )
}

export default Typography