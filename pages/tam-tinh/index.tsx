import { DataDetail } from '@src/components'
import { DATA } from '@src/utils/data'

export default function Post() {
    return (
        <>
            <main >
                <DataDetail data={DATA} />
            </main>
        </>
    )
}
