import * as i0 from '@angular/core';
import { Pipe, input, Component } from '@angular/core';
import { CommonModule } from '@angular/common';

class CapitalizePipe {
    transform(value) {
        return value?.toUpperCase() ?? '';
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CapitalizePipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
    static ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "19.2.14", ngImport: i0, type: CapitalizePipe, isStandalone: true, name: "capitalize" });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: CapitalizePipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'capitalize',
                }]
        }] });

class MrNgComponents {
    inputValue = input.required();
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MrNgComponents, deps: [], target: i0.ɵɵFactoryTarget.Component });
    static ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "17.1.0", version: "19.2.14", type: MrNgComponents, isStandalone: true, selector: "lib-mr-ng-components", inputs: { inputValue: { classPropertyName: "inputValue", publicName: "inputValue", isSignal: true, isRequired: true, transformFunction: null } }, ngImport: i0, template: `
    <p>{{ 'mr-ng-components works, thanks kp!' | capitalize }} {{inputValue()}}</p>
  `, isInline: true, styles: [":host{display:block}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "pipe", type: CapitalizePipe, name: "capitalize" }] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "19.2.14", ngImport: i0, type: MrNgComponents, decorators: [{
            type: Component,
            args: [{ selector: 'lib-mr-ng-components', standalone: true, imports: [CommonModule, CapitalizePipe], template: `
    <p>{{ 'mr-ng-components works, thanks kp!' | capitalize }} {{inputValue()}}</p>
  `, styles: [":host{display:block}\n"] }]
        }] });

/*
 * Public API Surface of mr-ng-components
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MrNgComponents };
//# sourceMappingURL=mr-ng-components.mjs.map
