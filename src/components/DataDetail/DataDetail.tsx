import { Content } from '@src/utils/type.utils';
import React from 'react';
import ContentItem from './components/ContentItem/ContentItem';
import './DataDetail.module.scss'

interface Props {
    data: Content,
}

const DataDetail = ({ data }: Props) => {
    return (
        <div>
            <ContentItem data={data} />
        </div>
    );
};

export default DataDetail;