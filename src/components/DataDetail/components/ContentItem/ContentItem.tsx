import ImageCommon from '@src/commons/ImageCommon/ImageCommon';
import ImgGalleryCommon from '@src/commons/ImgGalleryCommon/ImgGalleryCommon';
import { Content, ImgGallery } from '@src/utils/type.utils';
import React from 'react';
import s from './ContentItem.module.scss'

interface Props {
    data: Content,
}
const ContentItem = ({ data }: Props) => {

    return (
        <div className={s.contentItem}>
            <div>
                Bức thư số {data.id}
            </div>
            {
                data.content &&
                <div className={s.images}>
                    {data.content}
                </div>
            }
            <div className={s.nameWrap}>
                {
                    data.holyName && <div className={s.holyName}>
                        {
                            data.holyName
                        }
                    </div>
                }
                {
                    data.name && <div className={s.name}>
                        {
                            data.name
                        }
                    </div>
                }
            </div>

            <div>
                {
                    data.images?.map(item => <ImageCommon src={item.src} />)
                }

            </div>
        </div>
    );
};

export default ContentItem;