import DefaultPageLayout from '@/components/DefaultPageLayout/DefaultPageLayout';
import CollectionsPageContent from '@/components/CollectionsPageContent/CollectionsPageContent';
import { useUserCollections } from './hooks/useUserCollections';

export default function UserCollectionsPage() {
    const { collections, loading, error } = useUserCollections();

    return (
        <DefaultPageLayout activeTab="collections/my">
            <CollectionsPageContent
                collections={collections}
                loading={loading}
                error={error}
                title="Мои подборки"
                user={true}
            />
        </DefaultPageLayout>
    );
}
