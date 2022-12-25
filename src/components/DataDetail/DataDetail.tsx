import CarouselCommon from '@src/commons/CarouselCommon/CarouselCommon';
import { Content } from '@src/utils/type.utils';
import React from 'react';
import ContentItem from './components/ContentItem/ContentItem';
import './DataDetail.module.scss'

interface Props {
    data: Content[],
}

const DataDetail = ({ data }: Props) => {
    return (
        <div>
            <CarouselCommon>
                {
                    data.map(item => <ContentItem key={item.id} data={item} />)
                }

            </CarouselCommon>
        </div>
    );
};

export default DataDetail;