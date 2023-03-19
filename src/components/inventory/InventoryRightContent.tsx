import { useState } from 'react'
import { InventoryRightContentContainer, InventoryRightWrapper, Tab, Tabs } from "../../pages/admin/inventory/components"
import BundleCreateModal from '../modals/admin/product/BundleCreateModal'
import InventoryAddonsContent from './InventoryAddonsContent';
import InventoryBundleContent from './InventoryBundleContent';
import InventoryProductContent from './InventoryProductContent'

function InventoryRightContent({ searchName, setSearchName }: { searchName: string, setSearchName: React.Dispatch<React.SetStateAction<string>> }) {
  const [selectedTab, setSelectedTab] = useState<'products' | 'bundles' | 'addons' >('products');

  let content;

  if(selectedTab === 'products') {
    content = <InventoryProductContent searchName={searchName} setSearchName={setSearchName} />
  }

  if(selectedTab === 'bundles') {
    content = <InventoryBundleContent searchName={searchName} setSearchName={setSearchName} />
  }
  
  if(selectedTab === 'addons') {
    content = <InventoryAddonsContent searchName={searchName} setSearchName={setSearchName} />
  }

  return (

    <InventoryRightWrapper>
      <Tabs>
        <Tab onClick={() => setSelectedTab('products')} active={selectedTab === 'products'}>Products</Tab>
        <Tab onClick={() => setSelectedTab('bundles')} active={selectedTab === 'bundles'}>Bundles</Tab>
        <Tab onClick={() => setSelectedTab('addons')} active={selectedTab === 'addons'}>Add-ons</Tab>
      </Tabs>
      <InventoryRightContentContainer>
        {content}
      </InventoryRightContentContainer>
    
    </InventoryRightWrapper>

  )
}

export default InventoryRightContent