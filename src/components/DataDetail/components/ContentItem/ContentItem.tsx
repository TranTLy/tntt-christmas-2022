import { Content } from '@src/utils/type.utils';
import s from './ContentItem.module.scss';

interface Props {
    data: Content,
}
const ContentItem = ({ data }: Props) => {

    return (
        <div className={s.contentItem}>
            <div className={s.top}>
                Bức thư số <span className={s.number}>
                    {data.id}
                </span>
            </div>
            {/* {
                data.content &&
                <div className={s.content}>
                    {data.content}
                </div>
            } */}
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
            {
                data.class &&
                <div className={s.class}>
                    Lớp {data.class}
                </div>
            }

        </div>
    );
};

export default ContentItem;