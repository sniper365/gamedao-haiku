import { InjectedAccountWithMeta } from '@polkadot/extension-inject/types'
import { Signer } from '@polkadot/types/types'

export interface AccountSettings {
	selectedAddress: string
	allowConnect: boolean
}

export interface AccountState {
	account: InjectedAccountWithMeta | null
	signer: Signer
}

export interface ExtensionState {
	w3Enabled: boolean
	accounts: AccountState[] | null
	selectedAccount: AccountState
	connectWallet: Function
	disconnectWallet: Function
	selectAccount: Function<AccountState>
}
