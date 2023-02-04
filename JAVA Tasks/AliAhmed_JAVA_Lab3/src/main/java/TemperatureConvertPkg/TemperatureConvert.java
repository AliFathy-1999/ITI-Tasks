package TemperatureConvertPkg;
import java.util.function.Function;

/**
 *
 * @author alifathy99
 */
public class TemperatureConvert implements Function<Float, Float> {
    @Override
    public Float apply(Float t){
         return ((t*9)/5)+32 ;
    }
}
