import DefaultPageLayout from '@/shared/DefaultPageLayout/DefaultPageLayout';
import CollectionsPageContent from '@/widgets/CollectionsPageContent/CollectionsPageContent';
import { useUserCollections } from './hooks/useUserCollections';

export default function UserCollectionsPage() {
    const { collections, idle, loading, error } = useUserCollections();

    return (
        <DefaultPageLayout activeTab="collections/my">
            <CollectionsPageContent
                collections={collections}
                idle={idle}
                loading={loading}
                error={error}
                title="Мои подборки"
                user={true}
            />
        </DefaultPageLayout>
    );
}
