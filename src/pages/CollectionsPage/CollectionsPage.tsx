import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout';
import CollectionsPageContent from '@/components/CollectionsPageContent/CollectionsPageContent';
import { useCollections } from './hooks/useCollections';

export default function CollectionsPage() {
    const { collections, loading, error } = useCollections();

    return (
        <DefaultPageLayout activeTab="collections">
            <CollectionsPageContent
                collections={collections}
                loading={loading}
                error={error}
                title="Подборки"
            />
        </DefaultPageLayout>
    );
}
