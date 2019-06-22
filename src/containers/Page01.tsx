import React from 'react';
import { Translate } from '../components/Translater';

function Page01(): JSX.Element {
    return (
        <div id="lipsum">
            <Translate code="wow" />
            <p>
                <Translate code="wow">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vehicula cursus augue, quis feugiat tortor aliquet
                    rutrum. Vestibulum maximus consectetur mauris, ut convallis
                    velit rhoncus ac. Nam accumsan ipsum eu gravida facilisis.
                    Quisque convallis, ipsum vel convallis luctus, lorem libero
                    congue lacus, ut vehicula justo ipsum a massa. Praesent
                    varius lorem ac ullamcorper sodales. Mauris at tempus velit.
                    Sed sem dui, interdum vel nisl vel, porta maximus justo.
                    Pellentesque quis magna sed nibh finibus porttitor eget eget
                    sem.
                </Translate>
            </p>
            <p>
                Sed commodo mollis ipsum vel pretium. Maecenas vestibulum
                maximus nibh ornare feugiat. Nunc et iaculis dolor. Donec nulla
                orci, placerat suscipit ligula in, rutrum lacinia magna. Ut a
                est eget turpis porta convallis nec quis ex. Phasellus lacinia
                rutrum leo, et lobortis ex aliquet dictum. Fusce varius
                scelerisque nunc, et pharetra justo rhoncus ac. Sed lacinia mi
                eu ante pharetra venenatis. Morbi auctor ullamcorper convallis.
                Ut ut nulla laoreet, consectetur neque ac, porta libero. Donec
                sed ligula eu enim aliquet lobortis et vel nibh. In nisl purus,
                porttitor vel vehicula eget, imperdiet eu lacus. Quisque at
                lorem sed enim rutrum vulputate sit amet ut risus. Proin tempus
                ipsum ut odio posuere consectetur. Cras ut tellus quis leo
                suscipit interdum. Sed tristique convallis libero sit amet
                dictum.
            </p>
            <p>
                Morbi tincidunt lacinia faucibus. Duis euismod urna sed purus
                aliquam, et porta mauris pellentesque. Nulla facilisi. Aenean
                turpis tellus, elementum in accumsan eget, euismod nec dolor.
                Quisque purus dui, lacinia in euismod eget, tincidunt at nisi.
                Vestibulum aliquet nibh turpis, vel ultrices felis imperdiet in.
                Nullam in risus non quam commodo hendrerit eu quis diam. Sed eu
                tincidunt purus, rhoncus luctus augue. Nam in mauris commodo
                neque viverra malesuada vulputate nec nibh. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Nam rhoncus elit nec nisi consectetur tempus. Ut
                sagittis lacinia justo, maximus mattis orci sagittis vel. Nunc
                tristique quis magna sed sagittis.
            </p>
            <p>
                Pellentesque gravida sapien sit amet diam porta commodo. Proin
                ut justo in ex eleifend rutrum nec ac orci. Aenean lorem nunc,
                rhoncus id tempus ut, lobortis et augue. Vestibulum id vehicula
                mauris. Proin vulputate arcu dolor, in cursus urna elementum in.
                Quisque aliquet euismod dictum. Quisque non condimentum purus.
                Suspendisse ultrices laoreet orci, eget ullamcorper turpis. Sed
                consequat lacus in quam sagittis, eu luctus quam facilisis. Cras
                vestibulum lobortis dui, in luctus sem hendrerit at. Maecenas
                vitae urna justo.
            </p>
            <p>
                Integer eu mollis libero, in iaculis augue. Donec diam nibh,
                venenatis at justo at, maximus blandit nulla. Quisque vehicula
                ultrices neque sit amet pretium. Ut sed feugiat massa, sit amet
                eleifend sapien. Duis non orci metus. Mauris eget leo eu felis
                faucibus cursus sed a arcu. Aenean varius eros vitae enim
                luctus, et ornare sem varius. Etiam sit amet facilisis velit.
                Nulla commodo leo aliquet sollicitudin tristique. In hac
                habitasse platea dictumst. Vivamus velit leo, vehicula vitae
                ultricies ut, dictum vel lectus. Integer sodales arcu nec quam
                pellentesque, quis hendrerit massa convallis. Sed maximus odio
                in pulvinar venenatis.
            </p>
        </div>
    );
}

export default React.memo(Page01);
