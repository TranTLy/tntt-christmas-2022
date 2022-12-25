import { Content } from '@src/utils/type.utils';
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
                data.content ?
                    <div className={s.content}>
                        {data.content}
                    </div> : <div className={s.images}>
                        {data.content}
                    </div>
            }

            <div className="nameWrap">
                {
                    data.holyName && <div className={s.holyName}>
                    </div>
                }
                {
                    data.name && <div className={s.name}>
                    </div>
                }
            </div>


        </div>
    );
};

export default ContentItem;