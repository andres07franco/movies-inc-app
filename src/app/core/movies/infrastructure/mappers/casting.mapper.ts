import { Casting } from '@core/core.module';
import { CreditsRawDto } from '../dtos/credits-raw.dto';

export function mapCredictsRawToCasting(creditRaw: CreditsRawDto) {
  const { cast } = creditRaw;
  return cast.map(
    (raw) =>
      ({
        adult: raw.adult,
        gender: raw.gender,
        id: raw.id,
        knownForDepartment: raw.known_for_department,
        name: raw.name,
        originalName: raw.original_name,
        popularity: raw.popularity,
        profilePath: `https://image.tmdb.org/t/p/original${raw.profile_path}`,
        castId: raw.cast_id,
        character: raw.character,
        creditId: raw.credit_id,
        order: raw.order,
      }) as unknown as Casting,
  );
}
