import DefaultPageLayout from '@/shared/DefaultPageLayout/DefaultPageLayout';
import CollectionsPageContent from '@/widgets/CollectionsPageContent/CollectionsPageContent';
import { useCollections } from './hooks/useCollections';

export default function CollectionsPage() {
    const { collections, idle, loading, error } = useCollections();

    return (
        <DefaultPageLayout activeTab="collections">
            <CollectionsPageContent
                collections={collections}
                idle={idle}
                loading={loading}
                error={error}
                title="Подборки"
            />
        </DefaultPageLayout>
    );
}
