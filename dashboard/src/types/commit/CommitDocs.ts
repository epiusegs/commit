import { CommitDocsGroupItem } from './CommitDocsGroupItem'
import { CommitDocsTopbarItem } from './CommitDocsTopbarItem'
import { CommitDocsFooterItem } from './CommitDocsFooterItem'

export interface CommitDocs{
	name: string
	creation: string
	modified: string
	owner: string
	modified_by: string
	docstatus: 0 | 1 | 2
	parent?: string
	parentfield?: string
	parenttype?: string
	idx?: number
	/**	Header : Data	*/
	header: string
	/**	Route : Data	*/
	route: string
	/**	Published : Check	*/
	published?: 0 | 1
	/**	Sidebar : Table - Commit Docs Group Item	*/
	sidebar?: CommitDocsGroupItem[]
	/**	Light Mode Logo : Attach Image	*/
	light_mode_logo?: string
	/**	Night Mode Logo : Attach Image	*/
	night_mode_logo?: string
	/**	Navbar Items : Table - Commit Docs Topbar Item	*/
	navbar_items?: CommitDocsTopbarItem[]
	/**	Twitter  : Data - Add Twitter URL	*/
	twitter_url?: string
	/**	LinkedIn  : Data - Add LinkedIn URL	*/
	linkedin?: string
	/**	Github : Data - Add Github URL	*/
	github?: string
	/**	Raven : Data - Add Raven URL	*/
	raven?: string
	/**	Footer : Table - Commit Docs Footer Item	*/
	footer?: CommitDocsFooterItem[]
}