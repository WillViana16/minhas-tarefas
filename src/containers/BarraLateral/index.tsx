import FiltroCard from '../../components/FiltroCard'
import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
    </div>
    <S.Filtros>
      <FiltroCard legenda="pendentes" contador={1} />
      <FiltroCard legenda="concluidas" contador={2} />
      <FiltroCard legenda="urgentes" contador={3} />
      <FiltroCard legenda="importantes" contador={4} />
      <FiltroCard legenda="normal" contador={5} />
      <FiltroCard legenda="todas" contador={10} ativo />
    </S.Filtros>
  </S.Aside>
)
export default BarraLateral
