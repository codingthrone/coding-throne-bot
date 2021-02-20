/**
 * author: rbrtbrnschn
 */
import ConfigComponentFunctionalityInterface from './componentFunctionalityInterface'
import ConfigComponentInterface from './componentInterface'

type Name = String | undefined
export default class ConfigComponent implements ConfigComponentInterface {
    functionality: ConfigComponentFunctionalityInterface
    name: Name

    withName(_name: Name) {
        this.name = _name
        return this
    }
    withFunctionality(_functionality: ConfigComponentFunctionalityInterface) {
        this.functionality = _functionality
        return this
    }

    withComponent(subComponent: ConfigComponent) {
        const { name, functionality } = subComponent
        this.withName(name)
        this.withFunctionality(functionality)

        return this
    }
}