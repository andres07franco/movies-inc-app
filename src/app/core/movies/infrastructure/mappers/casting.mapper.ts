import { Casting } from '../../domain/entities/casting.entity';
import { CreditsRawDto } from '../dtos/credits-raw.dto';

const imageUrlBase = process.env.EXPO_PUBLIC_IMAGE_URL_BASE;

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
        profilePath: `${imageUrlBase}${raw.profile_path}`,
        castId: raw.cast_id,
        character: raw.character,
        creditId: raw.credit_id,
        order: raw.order,
      }) as unknown as Casting,
  );
}
